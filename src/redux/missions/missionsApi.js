/* eslint-disable */
import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import { keys } from 'lodash';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import loadingStatus from '../loadingStats';

const baseURLmissions = 'https://api.spacexdata.com/v3/missions';
const ACTION_PREPEND = 'SPACE/MISSIONS';

export const fetchMissions = createAsyncThunk(ACTION_PREPEND, async () => {
  const response = await axios.get(baseURLmissions);
  return response.data;
});

const initialState = {
  missions: [],
  status: 'IDLE',
};

const missionsSlice = createSlice({
  name: ACTION_PREPEND,
  initialState,
  reducers: {
    reserveMission: (state, action) => {
      const getState = current(state).missions;
      for (let i = 0; i < getState.length; i += 1) {
        if (getState[i].id === Number(action.payload)) {
          // state.rockets.rocket = true;
          state.missions[i].reserve = true;
        }
      }
    },
    cancelMissions: (state, action) => {
      const getState = current(state).missions;
      for (let i = 0; i < getState.length; i += 1) {
        if (getState[i].id === Number(action.payload)) {
          // state.rockets.rocket = true;
          state.missions[i].reserve = false;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.status = loadingStatus.succeeded;
        const missionsAll = action.payload;
        state.missions = missionsAll;
      });
  },
});

export const { reserveMission, cancelMissions } = missionsSlice.actions;

export default missionsSlice.reducer;
