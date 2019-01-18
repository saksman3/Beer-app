const defualtStatus = {
    IS_LOADING:false,
    success:false,
    failedMessage:'',

}
const StatusReducers = (state=defualtStatus,action)=>{
   switch(action.type){
    case"IS_LOADING":
    return {
        isLoading:action.isLoading
    }       
 case "FETCH_SUCCESS":
    return {
        success:action.success
    }   
 case "FAILURE":
    return {
      failedMessage:action.failedMessage
    }   
   default:
      return state

 }
}
 export default StatusReducers;