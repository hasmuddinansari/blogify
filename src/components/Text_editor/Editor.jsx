import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import style from "./Editor.module.css"

const DraftEditor = () => {
    const [editorState, onEditorStateChange] = useState(EditorState.createEmpty())
    const [title, setTitle] = useState("")
    function handleSubmit() {
        console.log(title)
        let data = draftToHtml(convertToRaw(editorState.getCurrentContent()))
        localStorage.setItem("html", JSON.stringify(data))
    }
    function Reseting() {
        var conf = window.confirm("Are you sure?")
        if (conf) {
            onEditorStateChange(EditorState.createEmpty())
            setTitle("")
        }
        else {
            alert("Your file is safe")
        }
    }
    function preview_blog() {
        let data = draftToHtml(convertToRaw(editorState.getCurrentContent()))
        localStorage.setItem("preview", JSON.stringify(data))
    }

    return (
        <div className="container-fluid row justify-content-center">
            <h2>Create Blog</h2>
            <div className="container row justify-content-end px-5 py-2">
                <div className=" px-2 ">
                    <button className="btn btn-success mx-2 my-1" onClick={handleSubmit}>Publish</button>
                    <Link to="/preview" className="btn btn-info my-1">
                        <span>
                            <span onClick={() => preview_blog()}>Preview</span>
                            <img className={style.preview} src="/icons/preview.svg" alt="preview" />
                        </span>
                    </Link>
                    <button className="btn btn-danger ml-2 my-1" onClick={Reseting}>Reset</button>
                </div>
            </div>
            <div>
                <input value={title} type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Blog Title...." className={`${style.headline}`} />
                <Editor
                    editorState={editorState}
                    toolbarClassName="p-3 shadow-lg"
                    wrapperClassName={`${style.size}`}
                    editorClassName={`p-2 bg-light border ${style.size}`}
                    onEditorStateChange={onEditorStateChange}
                    placeholder="content.............."
                />
            </div>
        </div>
    )
}

export default DraftEditor
