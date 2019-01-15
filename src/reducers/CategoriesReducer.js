const CategoriesReducer = (state=[],action)=>{
    switch(action.type){
        case 'FETCH_CATEGORIES':
            return (action.categories);
        default:
           return state;    
    }
 
}
export default CategoriesReducer;