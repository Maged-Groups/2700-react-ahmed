import { Link } from "react-router";
import apis from "../../lib/apis"
import { useState } from "react";
import { useEffect } from "react";
 

export default function CategoriesList() {

    const [categories, setCategories] = useState([])


    useEffect(() => {

        const getCategories = async () => {

            const res = await fetch(apis.categories);

            const data = await res.json();

            setCategories(data)
        }

        getCategories();
    }, [])


    return (
        <div className="p-3 flex flex-col gap-2 text-xs">
            {
                categories.map(cat => (
                    <div key={cat.slug}>
                        <Link to={`/categories/${cat.slug}`}>{cat.name}</Link>
                    </div>
                ))
            }
        </div>
    )
}
