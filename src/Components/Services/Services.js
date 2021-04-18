import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import {
    Switch,
    Route,
    useRouteMatch
  } from "react-router-dom";
import Book from './Book/Book';
import BookingList from './BookingList/BookingList';
import Review from './Review/Review';

const Services = () => {
    let { path, url } = useRouteMatch();

    const { id } = useParams()
    const [service, setService] = useState({});
    
    useEffect(() => {
        fetch(`https://lit-earth-86489.herokuapp.com/service/${id}`)
        .then(res => res.json())
        .then(data => {
            setService(data[0])
        })
    }, [])
    
    return (
        <div className="d-flex">
            <div className="">
                <Sidebar />
            </div>
            <div className="w-100 my-auto">
            <Switch>
                <Route exact path={path}>
                    <Book service={service}></Book>
                </Route>
                <Route exact path="/service/dashboard/book">
                    <Book service={service} />
                </Route>
                <Route path="/service/dashboard/booking">
                    <BookingList />
                </Route>
                <Route path="/service/dashboard/review">
                    <Review />
                </Route>
            </Switch>
            </div>
        </div>
    );
};

export default Services;