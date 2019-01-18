
const beerDetail = {

}
 const BeerReducer = (state=beerDetail,action)=>{
    switch(action.type){
        case 'FETCH_BEER':
            return action.beer;
        case 'ADD_BEER':
            return {
                    beer:action.beer
                }
        default:
           return state;
    }
}
export default BeerReducer;