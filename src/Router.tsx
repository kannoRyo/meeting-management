import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
// import Auth from './Auth'
import {SignIn,SignUp} from './templates/index'

const Router = ()=>{

	return (
        <BrowserRouter>
            <Route exact path="/aa" component={SignIn}></Route>
            <Route exact path="/" component={SignUp}></Route>
        </BrowserRouter>
)
}

export default Router