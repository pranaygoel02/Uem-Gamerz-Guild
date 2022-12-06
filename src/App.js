import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import { DataProvider } from "./context/dataContext";
import { AuthProvider } from "./context/authContext";
import './index.css'
import Freefire from "./pages/Freefire";
import {useLocation} from 'react-router-dom'
import Fifa from "./pages/Fifa";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  // const location = useLocation()
  return (
    <>
    <AuthProvider>
    <DataProvider>
      <Router>
            <div className={`flex flex-row`}>
              <Sidebar />
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/freefire" element={<ProtectedRoute Component={Freefire}/>} />
                <Route path="/fifa" element={<ProtectedRoute Component={Fifa}/>} />
                <Route path="*" element={<div>404</div>} />
              </Routes>
            </div>
        </Router>
        </DataProvider>
        </AuthProvider>
    </>
  );
}

export default App;
