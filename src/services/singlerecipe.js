import {
    singleRecipe,
    singleError,
    singleReset
} from '../action/recipe'

import foodforkapi from '../api/foodforkapi'


export function singleSearch(title) { 
    return dispatch => { 
        return foodforkapi.searchSingle(title)
            .then(res => { 
                console.log("Recipe", JSON.stringify(res.data.recipes[0], null, 3))
                dispatch(singleRecipe(res.data.recipes[0]))
            })
            .catch(err => dispatch(singleError(err)))
    }
}

export function resetSingle() {
    return dispatch => { 
        dispatch(singleReset()) 
    }
}