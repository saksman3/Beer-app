export const IsloadingStatus=(isLoading)=>{
    return{
        type:"IS_LOADING",
        isLoading
     }
}
export const SuccesStatus=(success)=>{
    return{
        type:"FETCH_SUCCESS",
        success
     }
}
export const failedMessage=(failedMessage)=>
{
    return {
        type:'FAILURE',
        failedMessage
    }
}