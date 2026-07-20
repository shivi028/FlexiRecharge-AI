import { StrictMode } from 'react'
import { Toaster } from "react-hot-toast";
// import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter> */}
      <App />
     <Toaster
      position="top-right"
      toastOptions={{
        duration: 3000,
        style: {
          borderRadius: "12px",
          background: "#1e293b",
          color: "#fff",
        },
      }}
    />
    {/* </BrowserRouter> */}
    
  </StrictMode>,
)
