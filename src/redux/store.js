import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import rocketsSlice from './rockets/rocketsApi';
import missionsSlice from './missions/missionsApi';

// import categoriesReducer from './categories/categories_duck';

const reducer = {
  rockets: rocketsSlice,
  missions: missionsSlice,
};

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
