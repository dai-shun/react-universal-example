/**
 * Created by daishun on 2017/4/4.
 */
import React from "react"
import { Link } from 'react-router-dom';
import {queryUserList} from "../../actions/about"
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
class About extends React.Component{
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
function mapStateToProps(state) {
    return { list: state.about.list};
}
function buildActionDispatcher(dispatch) {
    return {
        queryUserList: bindActionCreators(queryUserList, dispatch),
    }
}
export default connect(mapStateToProps,buildActionDispatcher)(About);