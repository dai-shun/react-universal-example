/**
 * Created by daishun on 2017/4/4.
 */
let defaultState = {}
if(typeof INITIAL_STATE != "undefined"){
    defaultState=INITIAL_STATE.about;
}
function reducer(state =defaultState, action) {
    switch (action.type) {
        case "SET_USER_LIST":
            let {data}=action;
            return Object.assign({list:action.data,...state})
        default:
            return state
    }
}

export default reducer;