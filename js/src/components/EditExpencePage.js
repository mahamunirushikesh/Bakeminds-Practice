import React from "react";
import { connect } from "react-redux";
import ExpenceForm from "./ExpenceForm";
import { editExpence, removeExpence } from "../actions/expences";
 
const EditExpencePage = (props) => {
    console.log(props)
   return(
    <div>
        <ExpenceForm 
        expence={props.expence}
        onSubmit ={(expence) => {
            props.dispatch(editExpence(props.expence.id,expence))
            props.history.push('/')
            console.log('updated',expence)
        }}
        />
        <button onClick={() => {
            props.dispatch(removeExpence({id:props.expence.id}))
            props.history.push('/')
        }}>Remove</button>
    </div>
   )
}
    
const mapStateToProps = (state,props) => {
    return{
        expence: state.expences.find((expence) => expence.id === props.match.params.id)
    };
    
}; 
export default connect(mapStateToProps)(EditExpencePage);