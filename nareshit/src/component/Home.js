import React,{Component,Fragment} from 'react'
import Header from './Header'
import Footer from './Footer'
import JSON from './db.json'
import NewsDisplay from './NewsDisplay';

class Home extends Component{
    constructor(){
        super()
        this.state={
            news:JSON,
            filtered:JSON
        }
    }

    filterNews=(userInput)=>{
        const output=this.state.news.filter((data)=>{
            return data.title.toLocaleLowerCase().indexOf(userInput.toLocaleLowerCase())>-1;
        })
        this.setState({filtered:output})
    }

    render(){
        return(
            <Fragment>
            <Header userText={(data)=>this.filterNews(data)}/>
            <hr/>
            <NewsDisplay newsData={this.state.filtered}/>
            <Footer year="2021" month="May"/>
            </Fragment>
            )

    }
}

export default Home;
