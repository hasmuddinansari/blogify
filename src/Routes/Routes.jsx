import React from 'react'
import Navbar from "../components/Common/Navbar"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Editor from "../components/Text_editor/Editor"
import Preview from "../components/Text_editor/Preview"
import Dashboad from "../components/Dashboard/Dashboard"
import Register from "../components/Authentication/Register"
import Login from "../components/Authentication/Login"
import NotFound from "../components/Common/NotFound"
import Blog from "../components/Dashboard/Blog"

export default function Routes() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Dashboad} />
                <Route path="/blogs/:id" exact component={Blog} />
                <Route path="/write" component={Editor} />
                <Route path="/signup" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/preview" component={Preview} />
                <Route component={NotFound} />
            </Switch>

        </Router>
    )
}
