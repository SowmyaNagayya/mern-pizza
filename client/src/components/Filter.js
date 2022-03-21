import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Filter() {
    const dispatch = useDispatch()
  return (
    <div>
        <div className="row justify-content-center">
            <div className="col-md-2">
                <input type="text" className="form-control" placeholder="Search Pizza" />
            </div>

            <div className="col-md-2">
                <select name="" id="">
                    <option value="all">All</option>
                    <option value="veg">Veg</option>
                    <option value="nonveg">Non-Veg</option>
                </select>
            </div>

            <div className="col-md-2">
                <button className="btn">Filter</button>
            </div>
        </div>
    </div>
  )
}
