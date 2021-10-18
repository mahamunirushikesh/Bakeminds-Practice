import {v4 as uuid} from 'uuid';

//ADD_EXPENCES
export const addExpence = (
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

export const removeExpence = ({id} = {}) => ({
    type :'REMOVE_EXPENCE',
    id
})

//EDIT_EXPENCES

export const editExpence = (id, updates) => ({
    type : 'EDIT_EXPENCE',
    id,
    updates
})