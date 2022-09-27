import { configureStore } from '@reduxjs/toolkit';
import rocketsSlice from './rockets/rocketsApi';

// import categoriesReducer from './categories/categories_duck';

const store = configureStore({
  reducer: {
    rockets: rocketsSlice,
  },
});

export default store;
