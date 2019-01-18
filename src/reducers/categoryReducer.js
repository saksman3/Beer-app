const categoryReducer=(state={},action)=>{
     switch(action.type){
        case 'FETCH_CATEGORY':
            return action.category
            
        case 'ADD_CATEGORY':
            return action.category  
        default:
           return state;

     }
}
export default categoryReducer;