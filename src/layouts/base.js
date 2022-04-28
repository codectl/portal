import React from "react";
import {Helmet} from "react-helmet"

import Navbar from "components/Navbar"


const Layout = ({children, title, description}) =>
    <>
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Helmet>
        <Navbar/>
        <main>{children}</main>
    </>

export default Layout
