import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom';


import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import Post from './Post'
import PostDetails from './PostDetails';
import Profile from './Profile';

const Routing=()=>{
    return(
        <BrowserRouter>
     <div>
        <Header/>
        <hr/>
        <Route exact path="/" component={Home}/>
        <Route path="/post" component={Post}/>
        <Route path="/profile" component={Profile}/> 
        <hr/>
        <Footer years="2021"/>
     </div>
    </BrowserRouter>
    )
}

export default Routing;