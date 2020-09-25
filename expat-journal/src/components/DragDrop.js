import React, {useCallback} from "react"
import {useDropzone} from "react-dropzone"
import axios from "axios"
import styled from "styled-components"

function DragDrop (){
    const onDrop = useCallback(acceptedFiles => {
        acceptedFiles.forEach((file)=>{
            const reader = new FileReader()
            reader.onabort = () => console.log("file reading was aborted")
            reader.onerror = () => console.log("file reading failed")
            reader.onload = () => {
                const binaryStr = reader.result
                console.log(binaryStr)
            }
            reader.readAsArrayBuffer(file)
        })
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <StyledDiv className="dragDrop-container">
            <StyledDiv {...getRootProps()}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                    <p>Drop the files here...</p> :
                    <p>Drag 'n drop some files here, or click to select files</p>
                }
            </StyledDiv>
        </StyledDiv>
    )
}

const StyledDiv = styled.div `
    .dragDrop-container{
        border: 2px solid gray;
        color: blue;
    }
`

export default DragDrop