import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = { data: [], loading: true, error : false }

export const getList = createAsyncThunk(
    'list/get',
    async (limit) => {
        const response = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
        return await response.json();
      }
  )

export const slice = createSlice({
    name : "list",
    initialState,
    extraReducers : (builder) =>{
        builder.addCase(getList.fulfilled, (state, action) =>{
            return {...state, data: action.payload, loading : false}
        })
        builder.addCase(getList.rejected, (state, action) =>{
            return {...state, data: [], loading : false, error : true}
        })
    },
    reducers : {
        clear : (state) =>{
            return {...state, data: [], loading : false}
        }
    }
})

export const {clear} = slice.actions;
export default slice.reducer;