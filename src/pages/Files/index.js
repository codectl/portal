import React from "react"
import Grid from "@mui/material/Grid"

import BaseLayout from "layouts/base"
import FileManager from "./components/FileManager"
import JobSubmissionForm from "./components/JobSubmission"


const Files = () => {
    return (
        <BaseLayout title="Files" description="Files page">
            <Grid container>
                <Grid item xs={6}>
                    <JobSubmissionForm/>
                </Grid>
                <Grid item xs={6}>
                    <FileManager/>
                </Grid>
            </Grid>
        </BaseLayout>
    )
}

export default Files
