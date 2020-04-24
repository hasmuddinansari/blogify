import React from 'react'
import Blog_content from "../Useful_component/Blog_content"

let preview = JSON.parse(localStorage.getItem("preview"))

export default function Preview() {
    return (
        <Blog_content blog={preview} getBack={"write"} />
    )

}
