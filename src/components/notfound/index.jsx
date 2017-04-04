/**
 * Created by daishun on 2017/4/4.
 */
import React from "react"
import fetch from "isomorphic-fetch";

export default class NotFound extends React.Component{
    static async fetchData(){
        let res = await fetch("http://rap.taobao.org/mockjsdata/16479/getUser");
        let  data = await res.json();
        return data;
    }
    componentDidMount(){
        Promise.all([this.constructor.fetchData()]).then(([data])=>{
            console.log(data)
        })
    }
    render(){
        return(
            <div>404</div>
        )
    }
}
