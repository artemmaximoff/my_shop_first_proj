import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { authReducer } from "./authReducer";
import thunkMiddleware from 'redux-thunk';


export const rootReducer = combineReducers({
    auth: authReducer
})

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // options like actionSanitizer, stateSanitizer
        }) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(thunkMiddleware))
// other store enhancers if any

const store = createStore(rootReducer, enhancer);


window._store_ = store;

export default store;

