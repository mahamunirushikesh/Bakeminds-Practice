import React from "react";
import { createStore } from "redux";

const Redux = () => {
    return (
        <div>

        </div>
    )
}

const store = createStore((state = { count : 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT' :
            return{ 
                count : state.count +1
        }
        default :
            return state;
    }
    
});
console.log(store.getState());
store.dispatch({
    type : 'INCREMENT'
});

store.dispatch({
    type : "INCREMENT"
});
store.dispatch({
    type : "INCREMENT"
});
export default Redux;