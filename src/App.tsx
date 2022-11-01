import React, {useState} from 'react';
import {Product} from "./components/Product";
import {useProducts} from "./hooks/product";
import {Loader} from "./components/Loader";
import {Modal} from "./components/Modal";
import {CreateProduct} from "./components/CreateProduct";
import {create} from "domain";
import {Iproduct} from "./models";


function App() {
    const {loading, error, products, addProduct} = useProducts()
    const [modal, setModal] = useState(false)

    const createHandler = (product: Iproduct) => {
        setModal(false)
        addProduct(product)
    }



    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {error && <p className="text-center text-red-600">{error} </p>}
            {loading && <Loader/>}
            {products.map(product => <Product products={product} key={product.id}/>)}
            {modal && <Modal title="Create new product" onClose={()=> setModal(false)}>
                <CreateProduct onCreate={createHandler}/>
            </Modal>}
            <button onClick={()=>setModal(true)} className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2">+</button>
        </div>

    );
}

export default App;
