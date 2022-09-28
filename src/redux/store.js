import { configureStore } from '@reduxjs/toolkit';
import { missionsSlice } from './missions/missionsApi';
import rocketsSlice from './rockets/rocketsApi';

// import categoriesReducer from './categories/categories_duck';

const store = configureStore({
  reducer: {
    rockets: rocketsSlice,
    missions: missionsSlice,
  },
});

export default store;
