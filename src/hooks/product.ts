import {useEffect, useState} from "react";
import {Iproduct} from "../models";
import axios, {AxiosError} from "axios";

export function useProducts () {
    const [products, setProducts] = useState<Iproduct[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    function addProduct(product: Iproduct) {
        setProducts(prev => [...prev,product ])
    }

    async function fechProducts() {
        try {
            setError('')
            setLoading(true)
            const response =  await  axios.get<Iproduct[]>('https://fakestoreapi.com/products?limit=10')
            setProducts(response.data)
            setLoading(false)
        } catch (e:unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }
    useEffect(() => {
        fechProducts()
    }, [])

    return { products, loading, error, addProduct }
}
