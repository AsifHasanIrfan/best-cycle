import React, { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './OrderList.css';

const OrderList = () => {
    const [Orders, setOrders] = useState([]);
    const [Order, setOrder] = useState({});

    useEffect(() => {
        fetch('https://lit-earth-86489.herokuapp.com/orders')
        .then(response => response.json())
        .then(data => setOrders(data))
    }, [])

    const loadOrder = (id) => {
        fetch(`https://lit-earth-86489.herokuapp.com/order/${id}`)
        .then(response => response.json())
        .then(data => {
            setOrder(data)
        })
    }

    const updateOrder = (id, status) => {
        const order = {id, status}
        fetch(`https://lit-earth-86489.herokuapp.com/update/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(response => response.json())
        .then(data => {
            if(data){
               window.location.reload(false);
            }
        })
    }

    return (
        <div className="m-5 p-4 rounded-3 bg-info">
            <h3>All Order List</h3>
            <div className="">
                <table>
                    <tr className="header">
                        <th>Name</th>
                        <th>Email ID</th>
                        <th>Service</th>
                        <th>Status</th>
                    </tr>
                    {
                        Orders.map(Order => <tr className="pd-row">
                            <td>{Order.billing_details.name}</td>
                            <td>{Order.billing_details.email}</td>
                            <td>{Order.service.name}</td>
                            <td>
                            <Dropdown onClick={() => loadOrder(Order._id)}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {Order.status}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => updateOrder(Order._id, "Pending")}>Pending</Dropdown.Item>
                                <Dropdown.Item onClick={() => updateOrder(Order._id, "On going")}>On going</Dropdown.Item>
                                <Dropdown.Item onClick={() => updateOrder(Order._id, "Done")}>Done</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                            </td>
                        </tr>
                        )
                    }
                </table>
            </div>
        </div>
    );
};

export default OrderList;