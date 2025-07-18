import React from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import { ToastContainer, toast } from 'react-toast'

function App() {
  return(
    <div className="bg-slate-100">
        <Home/>
        <ToastContainer />
    </div>
  )
}
export default App