import {applyMiddleware, combineReducers, createStore} from "redux";
import {requestReducer} from "./requestReducer";
import thunk from "redux-thunk";


const reducer = combineReducers({
    request: requestReducer,
})

export const juniorPlusStore = createStore(reducer, applyMiddleware(thunk))

export type juniorPlusStoreType = ReturnType<typeof reducer>