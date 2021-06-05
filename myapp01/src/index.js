import React,{Fragment} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'

const Home=()=>{
    return (
        <Fragment>
        <Header/>
        <h1>This is Index File </h1>
        </Fragment>

    )
}

ReactDOM.render(<Home/>,document.getElementById('root'));