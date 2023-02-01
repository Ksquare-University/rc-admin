import { newRestaurantCount } from './RestaurantForm';
import { restaurantView } from './RestaurantView';
import { counter } from './Restaurants';
import { InitialState } from './RestaurantForm/reducers'
import { InitialState as InitView } from './RestaurantView/reducers'
import { currentUserState } from './User';
import { CounterState } from './Restaurants'
import { User } from './User/reducers'
import { userForm } from './UserForm'
import { currentUserSideBarState } from './UserInfoSideBar';
import { sideBarState } from './UserInfoSideBar/reducer';
import { UserForm } from './UserForm/reducers';
import { UserForm as UserEdit } from './UserEdit/reducers';
import { userEdit } from './UserEdit';

export interface StateI {
    user: any;
    newRestaurantCount: InitialState,
    currentUserState: User,
    currentUserSideBarState:sideBarState,
    restaurantView: InitView,
    counter:CounterState,
    userForm: UserForm,
    userEdit: UserEdit, 
}

export default {
    newRestaurantCount,
    currentUserState,
    currentUserSideBarState,
    restaurantView,
    counter,
    userForm,
    userEdit,
}