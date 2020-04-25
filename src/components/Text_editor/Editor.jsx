import React, { useState, useEffect } from 'react'
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import style from "./Editor.module.css"
import { add_blog, curr_user_blogs, set_curr_blog } from "../../Redux/BlogCreate/actions"
import { connect } from 'react-redux';
import swal from 'sweetalert';

const DraftEditor = ({ curr_blog, history, add_blog, curr_user_blogs, email, username, set_curr_blog }) => {
    const [editorState, onEditorStateChange] = useState(EditorState.createEmpty())
    const [title, setTitle] = useState("")
    //collecting content and blog_info
    useEffect(() => {
        let preview = curr_blog
        if (Object.keys(preview).length > 0) {
            const blocksFromHtml = htmlToDraft(preview.content);
            const { contentBlocks, entityMap } = blocksFromHtml;
            const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
            const editorState = EditorState.createWithContent(contentState);
            onEditorStateChange(editorState)
            setTitle(preview.title)
        }
    }, [])
    function restoreData() {
        let content = draftToHtml(convertToRaw(editorState.getCurrentContent()))
        let blog_info = {
            "id": Date.now(),
            "content": content,
            "title": title,
            "date": new Date().toLocaleString(),
            "author": username,
            "email": email,
            "likes": 0,
            "user_likes": []
        }
        return blog_info
    }

    function handleSubmit() {
        let conf = window.confirm("Press ok to publish or just preview once")
        if (conf && title) {
            let blog_info = restoreData()
            curr_user_blogs(email)
            add_blog(blog_info)
            swal("", "Blog added", "success")
            Reseting(true)
            set_curr_blog({})
        }
        else {
            swal("", "title is required", "warning")
        }
    }
    function Reseting(conf) {
        if (conf === undefined) {
            let c = window.confirm("are you sure")
            if (c) {
                onEditorStateChange(EditorState.createEmpty())
                setTitle("")
                return
            }
        }
        if (conf) {
            onEditorStateChange(EditorState.createEmpty())
            setTitle("")
        }
        else {
            swal("", "your file is safe", "warning")
        }

    }
    function preview_blog() {
        if (title === "") {
            alert("title is required")
        }
        else {
            let data = restoreData()
            set_curr_blog(data)
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
                        <button className="btn btn-danger ml-2 my-1" onClick={() => Reseting()}>Reset</button>
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

const mapStateToProps = state => {
    return {
        email: state.auth.curr_user.email,
        username: state.auth.curr_user.username,
        curr_blog: state.blogs.curr_blog
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add_blog: (blog_detail) => dispatch(add_blog(blog_detail)),
        curr_user_blogs: (email) => dispatch(curr_user_blogs(email)),
        set_curr_blog: (cur_blog) => dispatch(set_curr_blog(cur_blog))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DraftEditor)
