import React from 'react';
import {
    Switch,
    Route
  } from "react-router-dom";
import Sidebar from '../Sidebar/Sidebar';
import OrderList from '../OrderList/OrderList';
import AddService from '../AddService/AddService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageService from '../ManageService/ManageService';
import Book from '../../Services/Book/Book';

const Dashboard = () => {
    
    return (
        <div className="d-flex">
            <div className="">
                <Sidebar />
            </div>
            <div className="w-100">
            <Switch>
            <Route exact path="/dashboard">
                    <Book />
                </Route>
                <Route path="/dashboard/order">
                    <OrderList />
                </Route>
                <Route path="/dashboard/addService">
                    <AddService />
                </Route>
                <Route path="/dashboard/makeAdmin">
                    <MakeAdmin />
                </Route>
                <Route path="/dashboard/manageService">
                    <ManageService />
                </Route>
            </Switch>
            </div>
        </div>
    );
};

export default Dashboard;