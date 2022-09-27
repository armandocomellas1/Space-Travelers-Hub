import { createAsyncThunk, nanoid, createSlice } from '@reduxjs/toolkit';
import { keys } from 'lodash';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import loadingStatus from '../loadingStats';

const urlBaseRockets = 'https://api.spacexdata.com/v3/rockets';
const ACTION_PREPEND = 'SPACE/ROCKETS';

export const fecthRockets = createAsyncThunk(ACTION_PREPEND, async () => {
  const response = await axios.get(urlBaseRockets);
  return response.data;
});

const createBook = (data) => ({
  item_id: uuidv4(),
  ...data,
});

const initialState = {
  rockets: [],
  status: 'IDLE',
};

const rocketsSlice = createSlice({
  name: ACTION_PREPEND,
  initialState,
  reducers: {
    // omit reducer cases
  },
  extraReducers: (builder) => {
    builder
      .addCase(fecthRockets.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fecthRockets.fulfilled, (state, action) => {
        state.status = loadingStatus.succeeded;
        const rocketsAll = action.payload;
        state.rockets = rocketsAll;
      });
  },
});

// Action creators are generated for each case reducer function
export const { validate, decrement } = rocketsSlice.actions;

export default rocketsSlice.reducer;
