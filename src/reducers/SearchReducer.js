const searchResults = [];
export const SearchReducer = (state=searchResults,action)=>{
       switch(action.type)
       {
        case 'FETCH_BEERS':
            return (
                action.result
            );   
       default:
          return state;
       }
}