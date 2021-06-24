import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import LoginComponent from './Login';
import RegisterComponent from './Register';
import ProfileComponent from './Profile';
import UserComponent from './UserApi';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={LoginComponent}/>
            <Route path="/register" component={RegisterComponent}/>
            <Route path="/profile" component={ProfileComponent}/>
            <Route path="/list" component={UserComponent}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;