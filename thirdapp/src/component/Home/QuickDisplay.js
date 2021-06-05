import React from 'react'
import {Link} from 'react-router-dom'
import './QuickSearch.css';

const QuickDisplay=(props)=>{
    const listTrip = ({tripdata})=>{
             if(tripdata){

            return tripdata.map((item)=>{
                return(
                    <Link to="/">
                    <div className="tileContainer">
    
                    <div className="tileComponent1">
                    <img src={item.image}/>
                    </div>
    
                    <div className="tileComponent2">
                    <div className="componentHeading">
                          {item.name}
                     </div>
    
                     <div className="ComponentHeading">
                       Start your {item.name} Trip with us
                       </div>
                      </div>
                    </div>
                    </Link>
                )
            })
        }
    }


    return(
        <div className="quickSearchContainer">
        <p className="quickSearchHeading">
            Quick Search
        </p>
        <p className="quickSearchSubHeading">
            Discover Trip By Type
        </p>
        <br/>

        {listTrip(props)}

        </div>
    )
}

export default QuickDisplay;