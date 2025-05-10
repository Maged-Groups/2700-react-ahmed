import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        rdxCartItems: [],
    },
    reducers: {
        rdxAddToCart: (state, action) => {
            /*
            {
            state: {
             rdxCartItems: 0,}
            },
             action :{
              type: 'cartSlice/rdxAddToCart' ,
              payload: [5,6,7]
                }
            }

            */
            console.log('state', state);
            console.log('action.payload', action.payload);


            // Get the product to add from payload
            const product = { ...action.payload };

            // copy the current products in the cart
            const currentProducts = [...state.rdxCartItems];
            console.log('currentProducts', currentProducts);

            // check if the product is exists in the cart
            const foundProduct = currentProducts.find(currentProduct => currentProduct.id == product.id);

            console.log('foundProduct', foundProduct);

            // If the product is not exists, add quantity = 1
            if (!foundProduct) {
                product.quantity = 1;
                state.rdxCartItems.push(product);
            }
            // if exists
            else {
                foundProduct.quantity = foundProduct.quantity + 1;

                const newCartItems = currentProducts.map(itm => {
                    if (itm.id == foundProduct.id) {
                        itm = foundProduct;
                    }
                    return itm;
                })

                state.rdxCartItems = newCartItems;


            }
        },
        rdxEmptyCart: (state) => { state.rdxCartItems = [] }
    }
});

export default cartSlice.reducer;

export const { rdxAddToCart, rdxEmptyCart } = cartSlice.actions;
