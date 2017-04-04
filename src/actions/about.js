/**
 * Created by daishun on 2017/4/4.
 */

export function setUserList(data) {
    return {
        type:"SET_USER_LIST",
        data
    }
}

export function queryUserList() {
    return function(dispatch,getState){
        fetch(`http://rap.taobao.org/mockjsdata/16479/getUser`)
            .then(function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function(data) {
                dispatch(setUserList(data));
            });
    }
}