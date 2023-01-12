import { newRestaurantCount } from './RestaurantForm';
import { counterState } from './RestaurantForm/reducers'

export interface StateI {
    newRestaurantCount: counterState,
}

export default {
    newRestaurantCount,
}