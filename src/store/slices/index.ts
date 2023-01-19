import { newRestaurantCount } from './RestaurantForm';
import { restaurantView } from './RestaurantView';
import { counter } from './Restaurants';
import { InitialState } from './RestaurantForm/reducers'
import { InitialState as InitView } from './RestaurantView/reducers'
import { currentUserState } from './User';
import { CounterState } from './Restaurants'
import { User } from './User/reducers'
import { currentUserSideBarState } from './UserInfoSideBar';
import { sideBarState } from './UserInfoSideBar/reducer';

export interface StateI {
    newRestaurantCount: InitialState,
    currentUserState: User,
    currentUserSideBarState:sideBarState,
    restaurantView: InitView,
    counter:CounterState,
}

export default {
    newRestaurantCount,
    currentUserState,
    currentUserSideBarState,
    restaurantView,
    counter,
}