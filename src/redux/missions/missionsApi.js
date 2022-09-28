/* eslint-disable */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const baseURL = 'https://api.spacexdata.com/v3/missions';
const initialState = {
  missions: [],
  status: 'IDLE',
};

export const fetchMissions = createAsyncThunk(
 'missions/getMission',
 async () => {
   const response = await fetch(baseURL);
   const data = await response.json();
   const missionInfo = data.map((mission) => ({
    id: mission.mission_id,
    name: mission.mission_name,
    description: mission.description,
    canceled: false,
   }));
   return missionInfo;
 },
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    reserveMission: (state, action) => state.map((mission) => {
      if (mission.mission_id !== action.payload.mission.mission_id) {
        return mission;
      }
      return { ...mission, reserved: !mission.reserved };
    }),
    cancelMissions: (state, action) => state.map((mission) => {
      // Nothign for now
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled, (state, action) => action.payload);
  },
});

export const { reserveMission, cancelMissions } = missionsSlice.actions;

export default missionsSlice.reducer;
