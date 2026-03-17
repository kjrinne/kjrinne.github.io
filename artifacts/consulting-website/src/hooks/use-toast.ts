import * as React from "react"

export interface ToastProps {
  id: string
  title?: string
  description?: string
  variant?: "default" | "destructive"
}

type ToastAction = 
  | { type: "ADD_TOAST"; toast: ToastProps }
  | { type: "DISMISS_TOAST"; toastId: string }
  | { type: "REMOVE_TOAST"; toastId: string }

let memoryState: { toasts: ToastProps[] } = { toasts: [] }
const listeners: Array<(state: { toasts: ToastProps[] }) => void> = []

function dispatch(action: ToastAction) {
  switch (action.type) {
    case "ADD_TOAST":
      memoryState = { ...memoryState, toasts: [action.toast, ...memoryState.toasts] }
      break
    case "DISMISS_TOAST":
      // In a real implementation we'd handle animation state here
      memoryState = { ...memoryState, toasts: memoryState.toasts.filter(t => t.id !== action.toastId) }
      break
    case "REMOVE_TOAST":
      memoryState = { ...memoryState, toasts: memoryState.toasts.filter(t => t.id !== action.toastId) }
      break
  }
  listeners.forEach(listener => listener(memoryState))
}

export function toast(props: Omit<ToastProps, "id">) {
  const id = Math.random().toString(36).substring(2, 9)
  const newToast = { ...props, id }
  dispatch({ type: "ADD_TOAST", toast: newToast })
  
  setTimeout(() => {
    dispatch({ type: "DISMISS_TOAST", toastId: id })
  }, 5000)
  
  return {
    id,
    dismiss: () => dispatch({ type: "DISMISS_TOAST", toastId: id })
  }
}

export function useToast() {
  const [state, setState] = React.useState(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) listeners.splice(index, 1)
    }
  }, [])

  return {
    toasts: state.toasts,
    toast,
    dismiss: (toastId?: string) => {
      if (toastId) dispatch({ type: "DISMISS_TOAST", toastId })
    }
  }
}
