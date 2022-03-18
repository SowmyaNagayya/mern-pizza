import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../actions/userActions'

function NavBar() {
    const cartstate = useSelector(state=>state.cartReducer)
    const userstate = useSelector(state=>state.loginUserReducer)
    const {currentUser} = userstate;
    const dispatch = useDispatch()
    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded"> 
                <a className="navbar-brand" href="/">PIZZA DRAMA</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav" style={{marginLeft:'990px'}} >
                    <ul className="navbar-nav ms-auto" >

                        {currentUser ? (
                        <div className="dropdown mt-4">
                        <a className="dropdown-toggle" style={{color: 'black', fontWeight:'bold'}}type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          {currentUser.name}
                        </a>
                        <div className="dropdown-menu"  aria-labelledby="dropdownMenuButton">
                          <a className="dropdown-item" style={{fontWeight: 'bold'}} href="#">Orders</a>
                          <a className="dropdown-item" style={{fontWeight: 'bold'}} href="#" onClick={() => dispatch(logoutUser())}><li>Logout</li></a>
                        </div>
                      </div>
                        ) : (
                        <li className="nav-item" >
                            <a className="nav-link" href="/login">Login</a>
                        </li>
                         )}
                        
                        <li className="nav-item">
                            <a className="nav-link" href="/cart">Cart {cartstate.cartItems.length}</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar