/**
 * Created by daishun on 2017/4/4.
 */
import React from "react"
import { Link } from 'react-router-dom';
import {queryUserList} from "../../actions/about"
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

@connect(state=>{return {list: state.about.list}},dispatch=>{return {queryUserList: bindActionCreators(queryUserList, dispatch)}})
export default class About extends React.Component{
   componentDidMount(){
     this.props.queryUserList();
   }
    render(){
        return(
            <div>
                <h1>about</h1>
                <div>{JSON.stringify(this.props.list)}</div>
                <Link to="/dashboard">跳转到dashboard</Link>
            </div>
        )
    }
}

