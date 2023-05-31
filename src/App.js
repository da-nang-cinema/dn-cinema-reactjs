import "./App.css";
import {Route, Routes} from "react-router-dom";
import CommonLayout from "./layout/CommonLayout";
import Login from "./pages/Login/Login";
import ConfirmEmail from "./pages/Login/ConfirmEmail";
import ResetPassword from "./pages/Login/ResetPassword";

import {ConfirmTicket} from "./components/confirm-ticket/ConfirmTicket";
import Home from "./pages/Home";
import React from "react";
import BookingTicket from "./pages/Booking/BookingTicket";


function App() {
    return (
        <Routes>
            <Route path="" element={<CommonLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/confirm-email" element={<ConfirmEmail/>}/>
                <Route path="/reset-password" element={<ResetPassword/>}/>
                <Route path='/confirm-ticket' element={<ConfirmTicket/>}/>
                <Route path='/booking-ticket' element={<BookingTicket/>}/>
            </Route>
        </Routes>

    );
}


export default App;
