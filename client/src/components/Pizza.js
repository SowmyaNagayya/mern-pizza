import React, {useState} from 'react'

function Pizza({pizza}) {
    const [ quantity, setQuantity ] = useState(1)
    const [ variant, setVariant ] = useState('small')
  return (
    <div style={{margin: '50px'}} className="shadow-lg p-3 mb-5 bg-white rounded">
        <h1>{pizza.name}</h1>
        <img src={pizza.image} className="img-fluid" style={{height:'200px', width: '200px'}}/>

        <div className="flex-container">
            <div className="w-100 m-1">
                <p>Variants</p>
                <select className='form-control' value={variant} onChange={(e) => {setVariant(e.target.value)}}>
                {pizza.variants.map(variant =>{
                    return <option value={variant}>{variant}</option>
                })}
                </select>
            </div>

            <div className="w-100 m-1">
                <p>Quantity</p>
                <select className='form-control' value={quantity} onChange={(e) => {setQuantity(e.target.value)}}>
                    {/* Array gives number 1 to 10 and keys are nothing but 1 to 10 , for empty array we use 2 parameters 1st parameter i.e "x and index "i"*/}
                    {[...Array(10).keys()].map((x, i) => {
                        // i+1 because index starts with 0 so, 0+1
                        return <option value={i+1}>{i+1}</option>
                    })} 
                </select>
            </div>
        </div>

        <div className="flex-container">
            {/* m-1 is marigin 10 */}
            <div className="m-1 w-100">
                {/* to calculate prize according to select the quantity and variant */}
               <h1 className="mt-1">Price:{pizza.prices[0][variant] * quantity} Rs/-</h1> 
            </div>

            <div className="m-1 w-100">
                <button className="btn">ADD TO CART</button>
            </div>
        </div>
    </div>
  )
}

export default Pizza