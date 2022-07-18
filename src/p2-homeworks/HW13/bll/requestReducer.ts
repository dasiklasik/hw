import {Dispatch} from "@reduxjs/toolkit";
import {API} from "../api/api";

enum REQUEST_TYPES {
    CHANGE_SUCCESS = 'CHANGE_SUCCESS'
}


type initialRequestStateType = {
    success: boolean
    status: string
    error: string | null
}

const initialState: initialRequestStateType = {
    success: false,
    status: '',
    error: null,
}

type actionType = changeSuccessType


export const requestReducer = (state = initialState, action: actionType): initialRequestStateType => {
    switch (action.type) {
        case REQUEST_TYPES.CHANGE_SUCCESS: {
            return {...state, success: action.success}
        }
        default: return state
    }

}

type changeSuccessType = ReturnType<typeof changeSuccess>
export const changeSuccess = (success: boolean) => {
    return {
        type: REQUEST_TYPES.CHANGE_SUCCESS as const,
        success,
    }
}


export const setSuccess = () => {

}