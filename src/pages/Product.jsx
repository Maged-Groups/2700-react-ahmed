import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import Rating from '../components/Rating';
import CategoriesList from '../components/products/CategoriesList';
import SimilarProducts from '../components/products/SimilarProducts';

export default function Product() {

    const [product, setProduct] = useState({});

    const { id } = useParams();

    const getProduct = async () => {
        const api = `https://dummyjson.com/products/${id}`;

        const res = await fetch(api);

        console.log('res', res);

        if (!res.ok) return alert('Product not found')

        const data = await res.json();
        console.log('data', data);

        setProduct(data)
    }

    useEffect(() => {
        getProduct();
    }, [id])



    console.log(id);

    return (
        <div className="flex flex-col lg:flex-row">
            <div className='p-5 lg:w-10/12'>
                <div className="flex gap-4">
                    <h3 className="text-3xl">{product.title}</h3>
                    <Rating rate={product.rating} />
                </div>
                <div>Category: {product.category}</div>

                <img src={product.thumbnail} alt="" />

                {/* Similar */}
                <SimilarProducts slug={product.category}/>
            </div>

            {/* Categories List */}
            <div className='lg:w-2/12'>
                <CategoriesList />
            </div>


        </div>
    )
}