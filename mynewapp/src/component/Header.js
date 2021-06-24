import React from 'react';
import {Link} from 'react-router-dom'

const Header=()=>{
    return(

        
    <div>
    <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#">Aspiring</a>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav">
        <li className="active"><Link to="/">Home</Link></li>
        <li><Link to="/post">Post</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/">Page 3</Link></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
    </div>
  </div>
</nav>
    
 </div>

    )}

export default Header;
