import { combineReducers } from "redux";

import recipes from './recipes'
import singlerecipe from './singlerecipe'


export default combineReducers({
    recipes: recipes,
    singlerecipe: singlerecipe
})