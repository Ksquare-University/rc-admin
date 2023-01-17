import { newRestaurantCount } from './RestaurantForm';
import { counterState, InitialState } from './RestaurantForm/reducers'

export interface StateI {
    newRestaurantCount: InitialState,
}

export default {
    newRestaurantCount,
}