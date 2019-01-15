const filtersDefault = {
    name:undefined,
    sortBy:undefined
}
export default (state=filtersDefault,action)=>{
    switch(action.type){
        case 'SET_NAME_FILTER':
           return {
               ...state,
               name:action.name
           }
        case 'SORT_BY_NAME':
             return {
                 ...state,
                 sortBy:'name'
             }   
        case 'SORT_BY_DATE':
           return{
               ...state,
               sortBy:'date'
           }    
        default:
        return state;
    }

}