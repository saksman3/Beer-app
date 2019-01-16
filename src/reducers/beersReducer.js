const defaultBeers = [];
const beersReducer = (state=defaultBeers,action)=>{
    console.log(action);
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
           return state.map((beer,index)=>{
               console.log(action.updates);
              if(index===parseInt(action.id,10)){
                  return {
                      ...beer,
                      ...action.updates
                  }
              }else{
                  return beer;
              }
           });
       case 'REMOVE_BEER':
          return state.filter((beer,index)=>{
              return index !== parseInt(action.id,10)
          });

  
       default:
         return state;
    }
}
export default beersReducer;