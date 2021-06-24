import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Component/Home/Home';
import ListingApi from './Component/listing/listingApi';
import DetailComponent from './Component/details/details';
import PlaceBooking from './Component/booking/placeBooking';
import BookingComponent from './Component/booking/bookingApi';

const Routing = () => {
    return(
        <BrowserRouter forceRefresh={true}>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route path="/list/:id" component={ListingApi}/>
            <Route path="/details/:id" component={DetailComponent}/>
            <Route path="/booking/:hotel_name" component={PlaceBooking}/>
            <Route path="/viewBooking" component={BookingComponent}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;