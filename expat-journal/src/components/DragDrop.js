import React, {useCallback} from "react"
import {useDropzone} from "react-dropzone"
import axios from "axios"
import styled from "styled-components"

const getColor = (props) => {
    if (props.isDragAccept) {
        return '#008000';
    }
    if (props.isDragReject) {
        return '#FF0000';
    }
    if (props.isDragActive) {
        return '#2196f3';
    }
    return '#eeeeee';
  }

const StyledDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: black;
  outline: none;
  transition: border .24s ease-in-out;
`;

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
        <div className="dragDrop-container">
            <StyledDiv {...getRootProps()}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                    <p>Drop the files here...</p> :
                    <p>Drag 'n drop a photo here, or click to select photo</p>
                }
            </StyledDiv>
        </div>
    )
}

export default DragDrop