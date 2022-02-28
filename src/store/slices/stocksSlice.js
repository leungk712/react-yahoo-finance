import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";

export const stockAPI = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 0,
    headers : { "x-api-key": process.env.REACT_APP_API_KEY }
});

export const fetchStockInformation = createAsyncThunk(
    'stocks/fetchStockInformation',
    async (payload) => {
        const { url, stockTicker, queryParams } = payload;
        try {
            const res = await stockAPI.get(`/${url}/${stockTicker}?${queryParams}`);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }
)

const initialState = {
    value: {
        errorMessage: "",
        loadingMessage: "",
        stock: {}
    }
}

const stocksSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder.addCase(fetchStockInformation.pending, (state) => {
          state.value.loadingMessage = "retrieving stock info...";
          state.value.stock = {};
      });
      builder.addCase(fetchStockInformation.fulfilled, (state, { payload }) => {
          state.value.loadingMessage = "successfully retrieved stock info...";
          state.value.stock = payload.quoteSummary.result[0];
      });
      builder.addCase(fetchStockInformation.rejected, (state, action) => {
          state.value.loadingMessage = "error: unable to retrieve stock info...";
          state.value.errorMessage = action.error.message;
      })
  }
})

export default stocksSlice.reducer;