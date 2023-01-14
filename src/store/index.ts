import { configureStore } from '@reduxjs/toolkit';
import {formInformation} from './slices/RestaurantForm'

import reducer from './slices';

const store = configureStore({
  reducer,
  middleware: (a) => a({serializableCheck:{ignoredActions:["newRestaurantForm/formInformation", "newRestaurantForm/updateState"]}})
});

export default store;