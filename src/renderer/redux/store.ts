import { is } from '@electron-toolkit/utils';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const rootReducer = combineReducers({});

const store = configureStore({
  reducer: rootReducer,
  devTools: is.dev,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  // enhancers: (defaultEnhancers) => [...defaultEnhancers]
});

type useAppSelectorReturnType = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<useAppSelectorReturnType> =
  useSelector;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export default store;
