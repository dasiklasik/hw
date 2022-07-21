import {Dispatch} from "@reduxjs/toolkit";
import {API} from "../api/api";

enum REQUEST_TYPES {
    CHANGE_SUCCESS = 'CHANGE_SUCCESS',
    CHANGE_INFO_ERROR = 'CHANGE_INFO_ERROR',
}


type initialRequestStateType = {
    success: boolean
    info: string
    error: string | null
}

const initialState: initialRequestStateType = {
    success: false,
    info: '',
    error: null,
}

type actionType = changeSuccessType | changeInfoErrorType


export const requestReducer = (state = initialState, action: actionType): initialRequestStateType => {
    switch (action.type) {
        case REQUEST_TYPES.CHANGE_SUCCESS: {
            return {...state, success: action.success}
        }
        case REQUEST_TYPES.CHANGE_INFO_ERROR: {
            return {...state, ...action.payload}
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

type changeInfoErrorType = ReturnType<typeof changeInfoError>
export const changeInfoError = (error: string, info: string) => {
    return {
        type: REQUEST_TYPES.CHANGE_INFO_ERROR as const,
        payload: {
            error,
            info,
        }
    }
}

export const setSuccess = () => {
    return (dispatch: Dispatch) => {
        API.setSuccess()
            .then((response) => {

                dispatch(changeInfoError(response.errorText, response.info))
            })
    }

}