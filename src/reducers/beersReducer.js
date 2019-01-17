const defaultBeers = [];
const beersReducer = (state=defaultBeers,action)=>{
    console.log(action);
    switch(action.type){
     
       case 'FETCH_DATA':
           return(
               action.beers
           );
       case 'EDIT_BEER':
           return state.map((beer)=>{
               if(beer.url === action.beer.url){
                   return {
                       ...beer,
                       ...action.beer
                   };
               }
               else
               {
                   return beer;
               }
           })  
       case 'REMOVE_BEER':
           return state.filter((beer)=>{
               console.log("removing beer ",action.beer.url);
               return beer.url !== action.beer.url
           });      
  
       default:
         return state;
    }
}
export default beersReducer;