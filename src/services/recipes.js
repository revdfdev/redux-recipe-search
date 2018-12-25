import  { 
    searchRecipe, 
    searchError, 
    searchReset } from '../action/recipe'

import foodforkapi from '../api/foodforkapi'

export function recipeSearch(searchText) {
    return dispatch => {
        return foodforkapi.searchPath(searchText)
            .then(res => dispatch(searchRecipe(res.data.recipes)))
            .catch(err => dispatch(searchError(err)))
    }
}

export function reset() {
    return dispatch => {
        dispatch(searchReset())
    }
}