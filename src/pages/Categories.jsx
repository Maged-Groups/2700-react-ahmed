import { useEffect, useState } from "react";
import ProductCard from "../components/products/ProductCard";
import apis from "../lib/apis";

import { useParams } from "react-router";
import CategoriesList from "../components/products/CategoriesList";

export default function Categories() {

    console.log('Categories rendered');

    const [products, setProducts] = useState([]);

    console.log('products outside the getProducts function', products);

    console.log('Before UseEffect')


    const { slug } = useParams();

    useEffect(() => {
        console.log('UseEffect fired');
        getProducts();
    }, [slug]);

    console.log('After UseEffect')

    const getProducts = async () => {
        console.log('getProducts fired')

        const res = await fetch(apis.byCategory + slug);

        console.log('res', res);

        if (!res.ok) return alert('Something went wrong');

        const data = await res.json();

        setProducts(data.products);

        console.log('products inside the getProducts function', products);
    }

 

    return (
        <div className="flex flex-col md:flex-row">
            <div className='p-5 md:w-10/12'>
                <h2 className="text-4xl my-4">Categories</h2>

                <div className="flex flex-wrap gap-4 justify-center">
                    {
                        products.map(product => <ProductCard product={product} key={product.id} />)
                    }
                </div>
            </div>

            {/* Categories List */}
            <div className='md:w-2/12'>
                <CategoriesList />
            </div>


        </div>
    )
}