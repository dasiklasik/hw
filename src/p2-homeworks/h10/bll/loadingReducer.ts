const SET_IS_LOADING = 'SET_IS_LOADING'


type initStateType = {
    isLoading: boolean
}

const initState: initStateType = {
    isLoading: false
}


export type actionType = setIsLoadingType

export const loadingReducer = (state = initState, action: actionType): initStateType => { // fix any
    switch (action.type) {
        case SET_IS_LOADING: {
            return {...state, isLoading: action.isLoading}
        }
        default: return state
    }
}



type setIsLoadingType = {
    type: 'SET_IS_LOADING'
    isLoading: boolean
}

export const setIsLoading = (isLoading: boolean): setIsLoadingType => {
    return {
        type: SET_IS_LOADING,
        isLoading,
    }
}