import React,{Fragment} from 'react'

const Footer=(props)=>{
    return(
        <Fragment>
        <center>
        <hr/>
        <span style={{color:'blue',fontWeight:'bold'}}>All Right and Reserved {props.year} {props.month} @Aspiring</span>
        </center>
        </Fragment> 
    )
}

export default Footer;