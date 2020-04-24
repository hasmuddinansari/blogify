import React, { useState, useEffect } from 'react'
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import style from "./Editor.module.css"

const DraftEditor = ({ history }) => {
    const [editorState, onEditorStateChange] = useState(EditorState.createEmpty())
    const [title, setTitle] = useState("")

    useEffect(() => {
        let preview = JSON.parse(localStorage.getItem("preview"))
        if (preview) {
            const blocksFromHtml = htmlToDraft(preview.content);
            const { contentBlocks, entityMap } = blocksFromHtml;
            const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
            const editorState = EditorState.createWithContent(contentState);
            onEditorStateChange(editorState)
            setTitle(preview.title)
        }
    }, [])


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
        if (title == "") {
            alert("title is required")
        }
        else {
            let content = draftToHtml(convertToRaw(editorState.getCurrentContent()))
            let data = {
                "content": content,
                "title": title,
                "date": new Date().toLocaleString(),
                "author": "Ayaan"
            }
            localStorage.setItem("preview", JSON.stringify(data))
            history.push("/preview")
        }
    }

    return (
        <>
            <div className={`${style.margin_top} container-fluid row justify-content-center`}>
                <div className="container row justify-content-end px-5">
                    <div className=" px-2 ">
                        <button className="btn btn-success mx-2 my-1" onClick={handleSubmit}>Publish</button>
                        <button onClick={() => preview_blog()} className="btn btn-info my-1">
                            <span>
                                <span >Preview</span>
                                <img className={style.preview} src="/icons/preview.svg" alt="preview" />
                            </span>
                        </button>
                        <button className="btn btn-danger ml-2 my-1" onClick={Reseting}>Reset</button>
                    </div>
                </div>
                <div>
                    <input value={title} type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Blog Title...." className={`${style.headline}`} />
                    <Editor
                        editorState={editorState}
                        toolbarClassName="p-3 shadow-lg"
                        wrapperClassName={`${style.size}`}
                        editorClassName={`px-2 bg-light border ${style.size}`}
                        onEditorStateChange={onEditorStateChange}
                        placeholder="content.............."
                    />
                </div>
            </div>
        </>
    )
}

export default DraftEditor
