import {
    SEARCH_RECIPE,
    SEARCH_RESET,
    SEARCH_ERROR,
    SINGLE_RECIPE,
    SINGLE_ERROR,
    SINGLE_RESET
} from './actionTypes'


export const singleRecipe = recipe => { 
    return {
        type: SINGLE_RECIPE,
        recipe: recipe
    }
} 

export const singleError = err => { 
    return {
        type: SINGLE_ERROR,
        error: err
    }
}

export const singleReset = () => { 
    return {
        type: SINGLE_RESET
    }
}

export const searchRecipe = recipes => {
    return {
        type: SEARCH_RECIPE,
        recipes: recipes
    }
}


export const searchError = error => { 
    return {
        type: SEARCH_ERROR,
        error: error
    }
}

export const searchReset = () => { 
    return {
        type: SEARCH_RESET
    }
}