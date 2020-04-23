import React, { useState } from 'react'
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const DraftEditor = () => {
    const [editorState, onEditorStateChange] = useState(EditorState.createEmpty())
    function handleSubmit() {
        let data = draftToHtml(convertToRaw(editorState.getCurrentContent()))
        localStorage.setItem("html", JSON.stringify(data))
    }
    function Reseting() {
        var conf = window.confirm("Are you sure?")
        if (conf) {
            onEditorStateChange(EditorState.createEmpty())
        }
        else {
            alert("Your file is safe")
        }
    }
    return (
        <div className="container-fluid row justify-content-center">
            <h1 >Create Blog</h1>
            <div className="container row justify-content-end p-3 ">
                <button className="btn btn-success mx-2" onClick={handleSubmit}>Create</button>
                <button className="btn btn-success ml-2" onClick={Reseting}>Create New Blog</button>
            </div>

            <Editor
                editorState={editorState}
                toolbarClassName="p-3 bg-light border border-dark shadow-sm"
                wrapperClassName=""
                editorClassName="p-2 border bg-light my-4"
                onEditorStateChange={onEditorStateChange}
            />
        </div>
    )
}

export default DraftEditor
