import { newRestaurantCount } from './RestaurantForm';
import { restaurantView } from './RestaurantView';

import { InitialState } from './RestaurantForm/reducers'
import { InitialState as InitView } from './RestaurantView/reducers'
import { currentUserState } from './User';
import { User } from './User/reducers'

export interface StateI {
    newRestaurantCount: InitialState,
    currentUserState: User,
    restaurantView: InitView,
}

export default {
    newRestaurantCount,
    currentUserState,
    restaurantView,
}