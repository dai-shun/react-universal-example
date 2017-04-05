/**
 * Created by daishun on 2017/4/4.
 */

function reducer(state={}, action) {
    switch (action.type) {
        case "SET_USER_LIST":
            let {data}=action;
            return Object.assign({list:action.data,...state})
        default:
            return state
    }
}

export default reducer;