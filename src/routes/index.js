/**
 * Created by daishun on 2017/4/4.
 */
import About from "../components/about";
import Dashboard from "../components/dashboard";
import NotFound from "../components/notfound";
import {setUserList} from "../actions/about"
const routes = [
    { path: '/about',
        component: About,
        loadData: async (store,match)=>{
            let res = await fetch("http://rap.taobao.org/mockjsdata/16479/getUser");
            let  data = await res.json();
            store.dispatch(setUserList(data));
        },
    },
    { path: '/dashboard',
        component: Dashboard,
        loadData: () => Dashboard.fetchData(),
    },
    {
        component: NotFound,
        loadData: () => NotFound.fetchData(),
    }
]


export default routes;