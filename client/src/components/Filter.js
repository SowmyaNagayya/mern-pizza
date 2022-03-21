import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Filter() {
    const dispatch = useDispatch()
  return (
    <div className="container">
        <div className="row justify-content-center shadow-lg p-3 mb-5 bg-white rounded">
            <div className="col-md-3">
                <input type="text" className="form-control" placeholder="Search Pizza" />
            </div>

            <div className="col-md-3 mt-3">
                <select className="form-control">
                    <option value="all">All</option>
                    <option value="veg">Veg</option>
                    <option value="nonveg">Non-Veg</option>
                </select>
            </div>

            <div className="col-md-3 mt-3">
                <button className="btn">Filter</button>
            </div>
        </div>
    </div>
  )
}
