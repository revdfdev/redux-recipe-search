import {
    SINGLE_RECIPE,
    SINGLE_RESET,
    SINGLE_ERROR
} from "../action/actionTypes";


const initialState = {
    activeRecipes: [],
    activeRecipeFound: false,
    error: null
}


export default function singlerecipe(state = initialState, action) {
    switch (action.type) { 
        case SINGLE_RECIPE:
            return Object.assign({}, state, {
                activeRecipes: action.recipe,
                activeRecipeFound: true,
                error: null
            })
        case SINGLE_ERROR:
            return Object.assign({}, state, {
                activeRecipes: [],
                activeRecipeFound: false,
                error: action.error
            })
        case SINGLE_RESET:
            return { ...initialState }
        default:
            return state
    }
}