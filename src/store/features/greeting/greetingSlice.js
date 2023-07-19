import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: '',
  loading: false,
};

export const fetchMessage = createAsyncThunk(
  'geeting/fetchMessage',
  async () => {
    const response = await fetch('http://127.0.0.1:3000/api/message');
    const data = await response.json();
    return data;
  },
);

export const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMessage.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMessage.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    });
  },
});

export default greetingSlice.reducer;
