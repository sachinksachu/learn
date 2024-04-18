import { configureStore } from "@reduxjs/toolkit";
import { slice } from "./productslice";

const store = configureStore({
    reducer :{
        list : slice.reducer
    }
})

export default store;