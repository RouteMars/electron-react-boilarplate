import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from '@renderer/redux/api/common/common.api';
import CommonSlice from '@renderer/redux/slice/common/common.slice';
import Common from '@util/common';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const rootReducer = combineReducers({
  common: CommonSlice,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: Common.isDev(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
  // enhancers: (defaultEnhancers) => [...defaultEnhancers]
});

type useAppSelectorReturnType = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<useAppSelectorReturnType> =
  useSelector;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export default store;
