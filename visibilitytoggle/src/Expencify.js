import React from "react";
import {v4 as uuid} from 'uuid';
import {createStore , combineReducers } from 'redux';


const Redux = () => {
    return (
        <div>
            Hello
        </div>
    )
}
//Action Generators

//ADD_EXPENCES
const addExpence = (
    {
         description='', 
         note='', 
         amount=0, 
         createdAt=0 
        } = {}
        ) => ({
    type : 'ADD_EXPENCE',
    expences:{
        id:uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
//REMOVE_EXPENCES

const removeExpence = ({id} = {}) => ({
    type :'REMOVE_EXPENCE',
    id
})

//EDIT_EXPENCES

const editExpence = (id, updates) => ({
    type : 'EDIT_EXPENCE',
    id,
    updates
})

//SET_TEXT_FILTERS

const setTextFilter = (text = '') => ({
    type : 'SET_TEXT_FILTER',
    text
})

//SORT_BY_DATE

    const sortByDate = () => ({
        type:'SORT_BY_DATE'
    })
//SORT_BY_AMOUNT'

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})
//SET_START_DATE

const setStartDate = (startDate) => ({
    type : 'SET_START_DATE',
    startDate  

})
//SET_END_DATE

const setEndDate = (endDate) => ({
    type : 'SET_END_DATE',
    endDate  

})
//Expence Reducer

const expenceReducerDefaultSatate =[];
const expenceReducer = (state=expenceReducerDefaultSatate ,action) => {
    switch (action.type){
        case 'ADD_EXPENCE' :
            return [
                ...state,
                action.expences
            ]
        
        case 'REMOVE_EXPENCE' :
            return state.filter(({id}) => id !== action.id)
        
        case 'EDIT_EXPENCE':
            return state.map((expence) => {
                if(expence.id === action.id){
                    return {
                        ...expence,
                        ...action.updates
                    };
                } else{
                    return expence;
                }
            } )   
           
            default :
            return state;
    }
}
//Filter Reducers
const filterReducerDefaultState ={
    text : '',
    sortBy :'date',
    startDate: undefined,
    endDate: undefined
};
const filterReducer = ( state=filterReducerDefaultState , action) => {
    switch (action.type){
        
        case 'SET_TEXT_FILTER' :
            return {
                ...state,
                text : action.text
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy :'amount'
            };

        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy :'date'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate:action.startDate
            }
        
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        
            default :
        return state;
    }
}

//      Get Visible expences

const geetVisibleExcepences = (expences , {text, sortBy ,startDate , endDate}) => {
        return expences.filter ((expence) => {
            const startDateMatch = typeof startDate !== 'number' || expence.createdAt >= startDate ;
            const endDateMatch = typeof endDate !=='number' || expence.createdAt <= endDate;
            const textMatch =expence.description.toLowerCase().includes(text.toLowerCase());

            return startDateMatch && endDateMatch && textMatch;
        }).sort((a,b) =>{
            if(sortBy === 'date'){
                return a.createdAt < b.createdAt ? 1 :-1;
            }else if(sortBy=='amount'){
                return a.amount <b.amount ? 1: -1 ;
            }
        })
}


//Store Creation

const store = createStore(
    combineReducers({
        expences: expenceReducer,
        filters :filterReducer
    })
    );

    store.subscribe(()=>{
        const state =store.getState();
        const visibleExpences =geetVisibleExcepences(state.expences , state.filters)
        console.log(visibleExpences)
    });
        //  Adding an Expence
    const expenceOne=store.dispatch(addExpence({ description : 'Rent', amount :100 ,createdAt :-1000}));
        // Adding an Expence
    const expenceTwo=store.dispatch(addExpence({ description : 'Tea', amount :10 ,createdAt:-100}));
    //     //Removing an Expence
    // store.dispatch(removeExpence({ id:expenceOne.expences.id }))
    //     //Editing an Expence
    // store.dispatch(editExpence(expenceTwo , {amount : '500'}))
    //     // Set Text Filter
     //store.dispatch(setTextFilter('reNt'))
    //     //Sort by an Amount
     store.dispatch(sortByAmount())
    //         //Sort by Date
    // store.dispatch(sortByDate())
    //         //Set Start Date
   // store.dispatch(setStartDate(125))
    // store.dispatch(setStartDate())
    //         // Set End Date
    // store.dispatch(setEndDate(1025))




    const demoState =  {
    expences :[{
        id:'ueytuy',
        description :'rent',
        note:'final rent of that address',
        amount :14000,
        createdAt :0
    }],
    filters :{
        text: 'rent',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
};



export default Redux    