import './App.css'
import Req from "./components/Req.jsx";
import React from "react";
import LogingPage from "./components/LogingPage.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DashboardPage from "./components/DashboardPage.jsx";
import RegistrationPage from "./components/RegistrationPage.jsx";

function App() {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LogingPage/>}/>
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/regitration" element={<RegistrationPage />} />

                </Routes>
            </BrowserRouter>
            {/*<Req/>*/}
        </div>

    )
}

export default App
