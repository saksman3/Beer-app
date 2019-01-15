import { dispatch } from "rxjs/internal/observable/range";

export const fetch_data = ()=>{
   return async ()=>{
       dispatch({type:'FETCH_DATA'})
       try{
           const result = await fetch('url');
           const data = await result.json();
           dispatch({
               type:'FETCH_DATA_SUCCESS',
               payload:data,

           })
       }catch(err)
       {
           dispatch({type:'FETCH_DATA_FAILURE',error:err})
       }
   }
}