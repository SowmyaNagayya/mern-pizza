import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Userslist from "../screens/Userslist";
import Orderslist from "../screens/Orderslist";
import Addpizza from "../screens/Addpizza";
import Pizzalist from "../screens/Pizzalist"

export default function Adminscreen() {
    const userstate = useSelector(state => state.loginUserReducer)
    const { currentUser } = userstate;
    const dispatch = useDispatch()

    useEffect(() => {
        if (currentUser.isAdmin) {
            window.location.href = '/'
        }
    }, [])
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <h1 style={{ fontSize: '35px' }}>Admin Panel</h1>
                    <ul className="adminfunctions">
                        <li><a href="/admin/userslist">Users List</a></li>
                        <li><a href="/admin/pizzalist">Pizzas List</a></li>
                        <li><a href="/admin/addpizza">Add New Pizza</a></li>
                        <li><a href="/admin/orderslist">Orders List</a></li>
                    </ul>
                    
                    <Switch>
                        <Route path="/admin/userslist" component={Userslist} exact />
                        <Route path="/admin/orderslist" component={Orderslist} exact />
                        <Route path="/admin/pizzalist" component={Pizzalist} exact />
                        <Route path="/admin/addpizza" component={Addpizza} exact />
                    </Switch>
                </div>
            </div>
        </div>
    )
}
