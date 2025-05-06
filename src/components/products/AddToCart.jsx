import React from 'react'
import { useState } from 'react'

export default function AddToCart() {
    const [items, setItems] = useState(0);

    return (
        <div className={styles.container}>
            <button onClick={() => setItems(items + 1)} className={`${styles.btn} ${styles.btn_add}`}>+</button>
            <span className={styles.counter}>{items}</span>
            <button onClick={() => setItems(items + -1)} className={`${styles.btn} ${styles.btn_rem}`}>-</button>
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