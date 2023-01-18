import { configureStore } from '@reduxjs/toolkit';

import reducer from './slices';

const store = configureStore({
  reducer,
  //middleware: (a) => a({serializableCheck:{ignoredActions:["newRestaurantForm/formInformation", "newRestaurantForm/updateState"]}})

});

export default store;