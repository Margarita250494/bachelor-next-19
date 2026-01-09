"use client";
import {lazy} from 'react'
import "react-toastify/dist/ReactToastify.css";
export const ToastContainer = lazy(() =>
  import("react-toastify").then((m) => ({
    default: m.ToastContainer
  }))
);