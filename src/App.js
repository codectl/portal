import React from "react"
import {Route, Routes} from "react-router-dom"

import "./App.scss"
import AboutUs from "pages/AboutUs"
import Home from "pages/Home"

const App = () => {
    return (
        <>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/about-us" element={<AboutUs/>}/>
            </Routes>
        </>
    )
}

export default App;
