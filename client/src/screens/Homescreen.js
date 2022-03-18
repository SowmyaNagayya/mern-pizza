import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPizzas } from '../actions/pizzaActions';
// import pizzas from '../pizzasdata';
import Pizza from '../components/Pizza';
import Loading from '../components/Loading';

function Homescreen() {
    const dispatch = useDispatch()
    const pizzasstate = useSelector(state=>state.getAllPizzasReducer)
    const { pizzas, error, loading} = pizzasstate
    useEffect(() => {
        dispatch(getAllPizzas())
    }, [])
    return (
        <div>
            <div className="row justify-content-center">
                {loading ? (<Loading />) : error ? (<h1>Something went wrong</h1>) : (
                    pizzas.map(pizza => {
                        return <div className="col-md-3 m-3" key={pizza._id}>
                            <div >
                                <Pizza pizza={pizza} />
                            </div>
                        </div>
                    })
                 )}
            </div>
        </div>
    )
}

export default Homescreen