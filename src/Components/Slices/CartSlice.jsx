import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    newProduct:[]
}
const CartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.newProduct = [...state.newProduct, action.payload]
        },
        deleteProduct: (state, action) => {
            state.newProduct = state.newProduct.filter(product=>product.id!==action.payload)
        }
    }
})


export const {addProduct, deleteProduct} = CartSlice.actions

export default CartSlice.reducer