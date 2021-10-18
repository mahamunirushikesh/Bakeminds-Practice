import React from "react";
import { connect } from "react-redux";
import ExpencListItem from "./ExpenceListItem";
import selectExpences from '../selectors/expences'
const ExpenceList = (props) => (
    <div>
        <h1>Expence List !!</h1>
        {props.expences.map((expence) => {
            return <ExpencListItem key ={expence.id}{...expence}/>
        })}
    </div>
);
 

const mapStateToProps=(state) => {
    return {
            expences: selectExpences(state.expences ,state.filters)
    }
}
export default connect(mapStateToProps)(ExpenceList)
