import React from 'react'

function Pizza({pizza}) {
  return (
    <div>
        <h1>{pizza.name}</h1>
        <img src={pizza.image} className="img-fluid" style={{height:'200px', width: '200px'}}/>

        <div className="flex-container">
            <div className="w-100">
                <p>Variants</p>
                <select>
                {pizza.variants.map(variant =>{
                    return <option value={variant}>{variant}</option>
                })}
                </select>
            </div>

            <div className="w-100">
                <p>Quantity</p>
                <select>
                    {/* Array gives number 1 to 10 and keys are nothing but 1 to 10 , for empty array we use 2 parameters 1st parameter i.e "x and index "i"*/}
                    {[...Array(10).keys()].map((x, i) => {
                        // i+1 because index starts with 0 so, 0+1
                        return <option value={i+1}>{i+1}</option>
                    })} 
                </select>
            </div>
        </div>
    </div>
  )
}

export default Pizza