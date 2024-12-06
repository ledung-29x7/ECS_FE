import actionType from "../actions/actionType"

const initState = {
    checklogin: false
}

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.CHECK_LOGIN:
            return {
                ...state,
                checklogin: action.ischeck
            }

        default:
            return state
    }
}

export default appReducer;