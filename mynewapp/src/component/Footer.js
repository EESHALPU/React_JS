import React from 'react';
import "./Footer.css"

const Footer=(props)=>{
    return(
    <div className="footer"><center>
    <h3> &copy;Developer Funnal {props.years}</h3>
    </center></div>
)}

export default Footer;
