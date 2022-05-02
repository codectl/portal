import React from "react"
import Grid from "@mui/material/Grid"

import FileManager from "./components/FileManager"
import BaseLayout from "layouts/base"


const Files = () => {
    return (
        <BaseLayout title="Files" description="Files page">
            <Grid container>
                <Grid item xs={6}>

                </Grid>
                <Grid item xs={6}>
                    <FileManager/>
                </Grid>
            </Grid>
        </BaseLayout>
    )
}

export default Files
