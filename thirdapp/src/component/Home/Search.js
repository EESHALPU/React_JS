import React,{Component} from 'react';
import './Search.css';

const cityUrl="https://developerfunnel.herokuapp.com/location";
const hotelUrl="https://developerfunnel.herokuapp.com/hotels?city=";

class Search extends Component{
    constructor(){
        super()
        this.state={
            location:''
        }
    }

    renderCity=(data)=>{
    if(data){
        return data.map((item)=>{        
            return(
                <option value={item._id}>
                {item.city_name} 
                </option>
            )
        })
            
    }
    
    
}


renderHotels=(data)=>{
    if(data){
        return data.map((item)=>{        
            return(
                <option value={item._id}>
                {item.name} | {item.locality}
                </option>
            )
        })
            
    }
    
    
}

handleCity=(event)=>{
    console.log(event.target.value);
    const cityId=event.target.value;
    fetch(hotelUrl+cityId,{method:'GET'})
    .then((res)=>res.json())
    .then((data)=>{
        this.setState({hotels:data})
    })

}

    render(){
        console.log("====>In render===>",this.state.location)
        return(
            <div className="imageContainer">
            <div id='logo'>
               D!
            </div>
            <div className="heading">
            Plan Trip with Us
            </div>
            <div className="locationSelector">
            <select className="locationDropDown" onChange={this.handleCity}>
            <option>--------Select City--------</option> 
                {this.renderCity(this.state.location)}
            </select>

            <select className="hotelDropDown">
            <option>--------Select Hotel--------</option> 
            {this.renderHotels(this.state.hotels)}
            </select>
            </div>


            </div>
        )
    }
    componentDidMount(){
        fetch(cityUrl,{method:'GET'})
        .then((res)=>res.json())

        .then((data)=>{
            this.setState({location:data})
        })

        .catch((err)=>{
            console.log(err)
        })
    }
}



export default Search;