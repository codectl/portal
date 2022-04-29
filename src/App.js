import React from "react"
import {Navigate, Route, Routes} from "react-router-dom"

import AboutUs from "pages/AboutUs"
import Files from "pages/Files"
import Home from "pages/Home"

import "App.scss"


const App = () => {
    return (
        <>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/home" element={<Navigate to="/" replace/>}/>
                <Route path="/files" element={<Files/>}/>
                <Route path="/about-us" element={<AboutUs/>}/>
            </Routes>
        </>
    )
}

export default App;
