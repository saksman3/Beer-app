import {fetchData} from './beers';
export const addBeer = (beer)=>{
    return{
        type:'ADD_BEER',
        beer
    }
}

export const startAddBeer = (beer)=>{
    return (dispatch)=>{
        fetch('http://apichallenge.canpango.com/beers/',{
            method:'post',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(beer)
        }).then((response)=>{
            
            return response.json();
        }).then((responseJson)=>{
            dispatch(addBeer({
            name:responseJson.name,
            ...beer
             }),
             dispatch(fetchData())
        )}).catch((error)=>{
            console.log("Error!",error);
        });
    }
}

   
export const fetchBeerDetails=(json)=>{
    return {
        type:'FETCH_BEER',
        beer:json
    }
}
export const fetchBeer=(beer)=>{
    
    return(dispatch)=>{ fetch(beer.url).then((response)=>{
         return response.json()
     }).then((json)=>{
         dispatch(fetchBeerDetails(json));
     });
    }
}