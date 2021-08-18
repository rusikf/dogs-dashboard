import { combineReducers } from 'redux';
import breed from './breedReducer'
import dogs from './dogReducer'

export default combineReducers({
    breed,
    dogs
});
