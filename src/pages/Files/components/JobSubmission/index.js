import React, {useState} from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import InputAdornment from "@mui/material/InputAdornment"
import {useFormik} from "formik"
import * as Yup from "yup"


const JobSubmissionForm = () => {
    const [validateOnChange, setValidateOnChange] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: "simple-job",
            cluster: "pbs59",
            script: "/test.sh",
            queue: "entry",
            nodes: "",
            cpus: "",
            mem: "",
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required("Missing name."),
            cluster: Yup.string()
                .required("Missing cluster."),
            script: Yup.string()
                .required("Missing script."),
        }),
        validateOnChange: validateOnChange,
        validateOnBlur: validateOnChange,
        onSubmit: async (values, actions) => {
            try {

            } catch (err) {
                // Set form errors based on response
                actions.setErrors(err.response.data);
            }
        },
    })

    return (
        <form onSubmit={formik.handleSubmit}>

            <TextField
                required
                id="name-input"
                label="Name"
                size="small"
                fullWidth
                margin="normal"
                {...formik.getFieldProps("name")}
            />

            <TextField
                required
                id="cluster-input"
                label="Cluster"
                size="small"
                fullWidth
                margin="normal"
                {...formik.getFieldProps("cluster")}
            />

            <TextField
                required
                id="queue-input"
                label="Queue"
                size="small"
                fullWidth
                margin="normal"
                {...formik.getFieldProps("queue")}
            />

            <Box sx={{
                display: "flex",
                gap: 1
            }}>
                <TextField
                    required
                    id="nodes-input"
                    label="Nodes"
                    size="small"
                    margin="normal"
                    sx={{flex: 1}}
                    {...formik.getFieldProps("nodes")}
                />
                <TextField
                    required
                    InputProps={{
                        startAdornment: <InputAdornment position="start">cores</InputAdornment>,
                    }}
                    id="cpus-input"
                    label="CPU"
                    size="small"
                    margin="normal"
                    sx={{flex: 1}}
                    {...formik.getFieldProps("cpus")}
                />
                <TextField
                    required
                    InputProps={{
                        startAdornment: <InputAdornment position="start">Gb</InputAdornment>,
                    }}
                    id="memory-input"
                    label="Memory"
                    size="small"
                    margin="normal"
                    sx={{flex: 1}}
                    {...formik.getFieldProps("mem")}
                />
            </Box>


            <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                onClick={() => setValidateOnChange(true)}
            >
                Submit
            </Button>
        </form>
    )
}

export default JobSubmissionForm
