import moment from "moment";


//      Get Visible expences

const getVisibleExcepences = (expences , {text, sortBy ,startDate , endDate}) => {
    return expences.filter ((expence) => {
        const createdAtMoment=moment(expence.createdAt)
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day')  : true ;
        const endDateMatch = endDate ?  endDate.isSameOrAfter(createdAtMoment, 'day') : true ;
        const textMatch =expence.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) =>{
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 :-1;
        }else if(sortBy ==='amount'){
            return a.amount <b.amount ? 1: -1 ;
        }
    })
}


export default getVisibleExcepences ;