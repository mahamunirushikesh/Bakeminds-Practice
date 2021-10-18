//Default Expence Reducer
const expenceReducerDefaultSatate =[];

// Expence Reducer
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

export default expenceReducer;