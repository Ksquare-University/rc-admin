import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import reducer from './slices';

const store = configureStore({
  reducer,
  //middleware: (a) => a({serializableCheck:{ignoredActions:["newRestaurantForm/formInformation", "newRestaurantForm/updateState"]}})

});

export default store;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;