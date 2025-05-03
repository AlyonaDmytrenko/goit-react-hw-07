import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://68148766225ff1af162920c2.mockapi.io';

export const fetchDataThunk = createAsyncThunk(
  'fetchData',
  async (body, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      console.log(response.data);

      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default [fetchDataThunk];
