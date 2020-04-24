import React from 'react'
import Navbar from "../components/Common/Navbar"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Editor from "../components/Text_editor/Editor"
import Preview from "../components/Text_editor/Preview"
import Dashboad from "../components/Dashboard/Dashboard"

export default function Routes() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Dashboad} />
                <Route path="/write" component={Editor} />
                <Route path="/preview" component={Preview} />
            </Switch>

        </Router>
    )
}
