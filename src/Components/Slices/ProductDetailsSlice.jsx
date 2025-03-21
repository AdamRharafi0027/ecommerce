import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ProductDetails: {}
}

const ProductDetailsSlice = createSlice({
    name: 'details',
    initialState,
    reducers: {
        productDetails: (state, action) => {
            state.ProductDetails = action.payload
        }
    }
})


export const {productDetails} = ProductDetailsSlice.actions

export default ProductDetailsSlice.reducer



