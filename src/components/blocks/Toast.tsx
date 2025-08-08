import React from 'react'
import { Toaster } from 'react-hot-toast'

const Toast: React.FC = () => {
  return (
    <Toaster
    position="top-right"
    reverseOrder={false}
    toastOptions={{
        style: {
        background: "#1E1E1E", // primary
        color: "#fff",
        fontSize: "14px",
        borderRadius: "8px",
        padding: "12px 16px",
        },
        success: {
        style: {
            background: "#C3F4BD", // pressed (success-like green)
            color: "#1E1E1E",      // primary text color
        },
        iconTheme: {
            primary: "#1E1E1E", // dark icon
            secondary: "#C3F4BD",
        },
        },
        error: {
        style: {
            background: "#F4BDDD", // brand (pink/red-ish for error)
            color: "#1E1E1E",
        },
        iconTheme: {
            primary: "#1E1E1E",
            secondary: "#F4BDDD",
        },
        },
    }}
    />
  )
}

export default Toast