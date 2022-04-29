import React from "react"
import ReactDOM from "react-dom/client"
import {BrowserRouter} from "react-router-dom"
import {registerLicense} from "@syncfusion/ej2-base"

import App from "App"
import reportWebVitals from "reportWebVitals"

import "index.scss"


// Registering Syncfusion license key
registerLicense(process.env.REACT_APP_LICENSE_KEY);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)

reportWebVitals()
