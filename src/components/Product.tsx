import React, {useState} from "react";
import {Iproduct} from "../models";

interface ProductProps {
    products: Iproduct
}

export function Product({products}: ProductProps) {

    const [details, setDetails] = useState(false)
    const btnBgClassName = details ? 'bg-yellow-400' : 'bg-blue-400'
    const bgnClasses = ['py-2 px-4 border rounded', btnBgClassName]

    return (
        <div className="border  py-2 px-4 rounded flex  flex-col items-center mb-2">
            <img src={products.image} className="w-1/6" alt={products.title}/>
            <p>{products.title}</p>
            <p className="font-bold">{products.price}</p>
            <button onClick={() => setDetails(prev => !prev)} className={bgnClasses.join(' ')}>
                { details ? 'Hide Detals' : 'Show Details' }
            </button>
            {details && <div>
                <p>{products.description}</p>
                <p>Rate: <span className="fw-bold" >{products?.rating?.rate} </span> </p>
            </div>}
        </div>
    )
}
