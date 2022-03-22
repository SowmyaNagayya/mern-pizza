import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

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
                        <li><a href="">Users List</a></li>
                        <li><a href="">Pizzas List</a></li>
                        <li><a href="">Add New Pizza</a></li>
                        <li><a href="">Orders List</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
