import { newRestaurantCount } from './RestaurantForm';
import { restaurantView } from './RestaurantView';
import { counter } from './Restaurants';


import { InitialState } from './RestaurantForm/reducers'
import { InitialState as InitView } from './RestaurantView/reducers'
import { currentUserState } from './User';
import { CounterState } from './Restaurants'
import { User } from './User/reducers'

export interface StateI {
    newRestaurantCount: InitialState,
    currentUserState: User,
    restaurantView: InitView,
    counter:CounterState,
}

export default {
    newRestaurantCount,
    currentUserState,
    restaurantView,
    counter,
}