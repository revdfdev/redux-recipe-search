import { applyMiddleware, compose, createStore } from "redux";
import { persistReducer, persistStore} from "redux-persist"
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from '../reducers/index'

const middleware = [thunk, logger]

export default function configureStore(onCompletion) { 
    
    const enhancer = compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    const persistConfig = {
        key: 'recipe-app',
        storage
    }
    

    const persistedReducer = persistReducer(persistConfig, rootReducer)
    let store = createStore(persistedReducer, enhancer)
    persistStore(store, undefined, onCompletion)

    return store
}