import React,{Component,Fragment} from 'react'
import './Header.css';

class Header extends Component{
        constructor(){
        super()
        this.state={
            title:'My App',
            userInput:'User Input Text Here'
        }
    }

    handleChnage=(event)=>{
        this.setState({userInput:event.target.value?event.target.value:'User Input Text Here'})
        this.props.userText(event.target.value)
    }
    
    render(){    
    return(
    <Fragment>
    <header>
    <center>
    <h1>Naresh I Technologies</h1>
    <div><input onChange={this.handleChnage} placeholder="Search"/></div>
    <div> {this.state.userInput}</div>
    </center>
    </header>
    </Fragment>
    )
}
}

export default Header;