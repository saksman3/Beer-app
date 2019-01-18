const CategoriesReducer = (state=[],action)=>{
    switch(action.type){
        case 'FETCH_CATEGORIES':
            return (action.categories);
        case 'EDIT_CATEGORY':
            return state.map((category)=>{
                if(category.url === action.category.url){
                    return {
                        ...category,
                        ...action.category
                    }
                }else{
                    return category;
                }
            })
        case 'ADD_CATEGORY':
           console.log("add-cate",state);
           return [
               ...state,
               action.category
           ] 
        default:
           return state;    
    }
}
export default CategoriesReducer;