import React from "react"
import Grid from "@mui/material/Grid"

import FileManager from "./components/FileManager"
import Layout from "layouts/base"


const Files = () => {
    return (
        <Layout title="Files" description="Files page">
            <Grid container>
                <Grid item xs={6}>

                </Grid>
                <Grid item xs={6}>
                    <FileManager/>
                </Grid>
            </Grid>
        </Layout>
    )
}

export default Files
