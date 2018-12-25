import {
    SEARCH_RECIPE,
    SEARCH_RESET,
    SEARCH_ERROR
} from "../action/actionTypes";


const initialState = {
    recipes: [],
    recipesFound: false,
    error: null
}

export default function recipes(state = initialState, action) { 
    switch (action.type) {
        case SEARCH_RECIPE:
            return Object.assign({}, state, {
                recipes: action.recipes,
                recipesFound: true,
                error: null
            })
        case SEARCH_ERROR:
            return Object.assign({}, state, {
                recipes: [],
                recipesFound: false,
                error: action.error
            })
        case SEARCH_RESET:
            return {...initialState}
        default:
            return state
    }
}