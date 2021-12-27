import {userType} from "../HW8";


type actionType = {
    type: 'sort' | 'check'
    payload: 'up' | 'down' | 18
}


export const homeWorkReducer = (state: Array<userType>, action: actionType): Array<userType> => { // need to fix any
    debugger
    switch (action.type) {
        case 'sort': {
            debugger
            if (action.payload === 'up') {
                let copyState = state.sort((a,b) => {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return 1
                    } else {
                        return - 1
                    }
                })
                debugger
                return [...copyState]
            } else {
                let copyState = state.sort((a,b) => {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return -1
                    } else {
                        return 1
                    }
                })
                return [...copyState]
            }
            return state
        }
        case 'check': {
            let copyState = state.filter(t => t.age >= action.payload)
            return copyState
        }
        default: return state
    }
}