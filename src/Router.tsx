import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
// import Auth from './Auth'
import {Home, SignIn,SignUp} from './templates/index'

const Router = ()=>{
	return (
        <BrowserRouter>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/signin" component={SignIn}></Route>
            <Route exact path="/signup" component={SignUp}></Route>
        </BrowserRouter>
)
}

export default Router