import {SuccesStatus,failedMessage} from './status';
export const StoreCategory=(category)=>{
    console.log("store category",category);
    return {
        type:'FETCH_CATEGORY',
        category
    }
}

export const fetchCategory=(category)=>{
    
    return (dispatch)=>{
        fetch(category.url,{
            method:"GET",
        }).then((response)=>{
           if(response.status===200)
           {
              dispatch(SuccesStatus(response.ok))
              return response.json();
           }else if(response.status>=400){
               return response.json();
           }
        }).then((responseJson)=>{
            dispatch(StoreCategory(responseJson));
        }).catch((error)=>{
             dispatch(failedMessage(error));
        });

    }
}