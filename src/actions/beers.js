
const recieveBeers = (json)=>{
    
    return {
        type:'FETCH_DATA',
        beers:json,
    }
}
export const fetchData = ()=>{
    return (dispatch)=>{
       
        fetch('http://apichallenge.canpango.com/beers/',{
            headers:{
                'cache-control':'no-cache',
                'pragma':'no-cache'
            }
        }).then((data)=>{
            return data.json();
        }).then((json)=>{
            dispatch(recieveBeers(json))
        });    
    }
}
export const removeBeer = (beer={})=>{
    return {
        type:'REMOVE_BEER',
        beer

    }
}
export const startRemove=(beer)=>{
    
    return(dispatch)=>{
        fetch(beer.url,{
            method:'DELETE',
            headers:{
                 contenttype:'application/json',   
            }, 
        }).then(()=>{

            dispatch(removeBeer(beer));
        })
      }
    };
    //edit beer
    export const editBeer = (beer)=>{
        return {
            type:'EDIT_BEER',
            beer, 
        }
    }
    export const startEditBeer = (beer)=>{
        
        return (dispatch)=>{
           fetch(beer.url,{
            method:'PUT',
            headers:{
                "content-type":"application/json",
                'cache-control':'no-cache',
                'pragma':'no-cache'
            },
            body:JSON.stringify(beer)
           }).then((response)=>{
               
               return response.json()
            }).then((json)=>{
                
                dispatch(editBeer(json));
            }
                   
                ).catch((error)=>{
                console.log("error",error,);
            }); 
        }
    }
