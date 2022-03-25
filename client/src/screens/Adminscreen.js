import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
// import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
// // import {Link} from "react-router-dom"
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
                        <Link to={'/admin/userslist'}>Users list</Link>
                        <Link to={'/admin/orderslist'}>Orders list</Link>
                        <Link to={'/admin/pizzalist'}>Pizza list</Link>
                        <Link to={'/admin/addpizza'}>Add Pizza</Link>
                    </ul>
                    <Router>
                        <Routes>
                        <Route path="/admin" exact element={<Userslist />}  /> 
                        <Route path="/admin/userslist" exact element={<Userslist />}  />
                        <Route path="/admin/orderslist" exact element={<Orderslist />}  />
                        <Route path="/admin/pizzalist" exact element={<Pizzalist />}  />
                        <Route path="/admin/addpizza" exact element={<Addpizza />}  />
                        </Routes>
                    </Router>
                </div>
            </div>
        </div>
    )
}
