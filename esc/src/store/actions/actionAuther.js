import actionType  from "./actionType"
export const checkLogin = (ischeck) =>{
    return {
        type:actionType.CHECK_LOGIN,
        checklog: ischeck
    }
}