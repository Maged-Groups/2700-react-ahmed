import { Link } from "react-router";
import Rating from "../Rating";
import AddToCart from "./AddToCart";

const ProductCard = ({ product }) => {
    return (
        <div>

            <div className="p-4 h-110 w-72 shadow shadow-gray-400 rounded flex flex-col justify-between">
                <Link to={`/marketplace/${product.id}`}>
                    <h3 className="text-xl text-center">{product.title}</h3>

                    <div>
                        <img src={product.thumbnail} className="max-w-full" alt="" />

                        <Rating rate={product.rating} roundMethod="ceil" showRateText={true} />
                    </div>
                </Link>

                <div className="py-4">
                    <AddToCart />
                </div>
            </div>
        </div>
    )

}

export default ProductCard;