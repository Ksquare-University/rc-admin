import { combineReducers } from 'redux';
import { newRestaurantCount } from './RestaurantForm';
import { InitialState } from './RestaurantForm/reducers'
import { currentUserState } from './User';
import { User } from './User/reducers'

export interface StateI {
    newRestaurantCount: InitialState,
    currentUserState: User,
}

export default {
    newRestaurantCount,
    currentUserState,
}