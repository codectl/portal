import React from "react"
import {
    FileManagerComponent,
    Inject,
    NavigationPane,
    DetailsView,
    Toolbar
} from "@syncfusion/ej2-react-filemanager";

import Layout from "layouts/base"


const Files = () => {
    const hostUrl = "https://ej2-aspcore-service.azurewebsites.net/";

    return (
        <Layout title="Files" description="Files page">
            <div>
                <div className="control-section">
                    <FileManagerComponent
                        id="overview-file"
                        allowDragAndDrop={true}
                        ajaxSettings={{
                            url: hostUrl + "api/FileManager/FileOperations",
                            getImageUrl: hostUrl + "api/FileManager/GetImage",
                            uploadUrl: hostUrl + "api/FileManager/Upload",
                            downloadUrl: hostUrl + "api/FileManager/Download"
                        }} view={"Details"}>
                        <Inject services={[NavigationPane, DetailsView, Toolbar]}/>
                    </FileManagerComponent>
                </div>
            </div>
        </Layout>
    )
}

export default Files
