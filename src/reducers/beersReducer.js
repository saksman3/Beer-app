const defaultBeers = [];
const beersReducer = (state=defaultBeers,action)=>{
    switch(action.type){
     
       case 'FETCH_DATA':
           return(
               action.beers
           );   
       case 'ADD_BEER':
           return [
               ...state,
               action.beer
           ]
       case 'EDIT_BEER':
           return state.map((beer)=>{
              if(beer.name=== action.name){
                  return {
                      ...beer,
                      ...action.updates
                  }
              }else{
                  return beer;
              }
           });
       case 'REMOVE_BEER':
          return state.filter((name)=>name !== action.name);
       default:
         return state;
    }
}
export default beersReducer;