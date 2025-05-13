import { rdxAddToCart } from "../../redux/cartSlice"

import { useDispatch, useSelector } from "react-redux"

function AddToCart({ product }) {

    console.log('AddToCart component rendered')

    const dispatch = useDispatch();

    const { rdxCartItems } = useSelector(store => store.cartSlice)

    const cartItem = rdxCartItems.find(itm => itm.id == product.id)

    // If cartItem is undefined then the value will be 0
    const itemCount = cartItem?.quantity ?? 0;

    console.log('cartItem', cartItem)

    const handleAddToCart = () => {
        dispatch(rdxAddToCart(product));
    }

    return (
        <div className={styles.container}>
            <button onClick={handleAddToCart} className={`${styles.btn} ${styles.btn_add}`}>+</button>
            <span className={styles.counter}>{itemCount}</span>
            <button className={`${styles.btn} ${styles.btn_rem}`}>-</button>
        </div>
    )
}

const styles = {
    container: 'flex justify-end items-center px-4 gap-4',
    btn: 'h-10 w-10 text-white font-bold text-xl flex justify-center items-center',
    btn_add: 'bg-green-700',
    btn_rem: 'bg-red-700',
    counter: 'flex-1x text-center'
}

export default AddToCart