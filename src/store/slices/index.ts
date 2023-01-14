import { newRestaurantCount } from './RestaurantForm';
import { counterState, initialState } from './RestaurantForm/reducers'

export interface StateI {
    newRestaurantCount: initialState,
}

export default {
    newRestaurantCount,
}