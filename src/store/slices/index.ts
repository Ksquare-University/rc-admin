import { combineReducers } from 'redux';
import { newRestaurantCount } from './RestaurantForm';
import { InitialState } from './RestaurantForm/reducers'
import { currentUserState } from './User';
import { User } from './User/reducers'
import { currentUserSideBarState } from './UserInfoSideBar';
import { sideBarState } from './UserInfoSideBar/reducer';

export interface StateI {
    newRestaurantCount: InitialState,
    currentUserState: User,
    currentUserSideBarState:sideBarState,
    
}

export default {
    newRestaurantCount,
    currentUserState,
    currentUserSideBarState
}