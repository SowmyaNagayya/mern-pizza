import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPizzas } from '../actions/pizzaActions';
import pizzas from '../pizzasdata';
import Pizza from '../components/Pizza';

function Homescreen() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllPizzas())
    }, [])
    return (
        <div>
            <div className="row">
                {pizzas.map(pizza => {
                    return <div className="col-md-4">
                        <div>
                            <Pizza pizza={pizza} />
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Homescreen