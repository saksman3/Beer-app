const defaultBeers = [];

export default(state={},action)=>{
    switch(action.type){
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
          return state.filter((name)=>name != action.name);
       default:
         return state;
    }
}