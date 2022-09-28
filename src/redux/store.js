import { configureStore } from '@reduxjs/toolkit';
import rocketsSlice from './rockets/rocketsApi';
import missionsSlice from './missions/missionsApi';

// import categoriesReducer from './categories/categories_duck';

const store = configureStore({
  reducer: {
    rockets: rocketsSlice,
    missions: missionsSlice,
  },
});

export default store;
