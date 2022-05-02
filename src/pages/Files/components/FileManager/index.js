import React from "react"
import {
    FileManagerComponent,
    Inject,
    NavigationPane,
    DetailsView,
    Toolbar
} from "@syncfusion/ej2-react-filemanager"


const FilesManager = () => {
    const hostUrl = "https://ej2-aspcore-service.azurewebsites.net/";

    return (
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
    )
}

export default FilesManager
