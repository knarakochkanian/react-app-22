import React, {useState} from "react";
import {products} from "../data/products";
import axios from "axios";
import {Iproduct} from "../models";
import {ErrorMessege} from "./ErrorMessage";

const productData: Iproduct = {
    title: '',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    "rating": {"rate": 3.9, "count": 120}
}

interface CreateProductProps {
    onCreate: (product: Iproduct) => void
}

export function CreateProduct( {onCreate}: CreateProductProps ) {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()

        setError('')
        if (value.trim().length === 0) {
            setError('Please enter valid title.')
            return
        }
        productData.title = value
        const response = await  axios.post<Iproduct>('https://fakestoreapi.com/products', productData)

        onCreate(response.data)
    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }


    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                className="border py-2 px-4 mb-2 w-full outline-0"
                placeholder="Enter product title... "
                value={value}
                onChange={changeHandler}

            />
            {error && <ErrorMessege error={error}/>}
            <button type="submit" className="py-2 px-4 border bg-yellow-400 hover:text-white">Create</button>
        </form>
    )
}
