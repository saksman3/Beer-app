
const recieveBeers = (json)=>{
    console.log('my-array',json);
    return {
        type:'FETCH_DATA',
        beers:json,
    }
}
export const fetchData = ()=>{
    return (dispatch)=>{
        console.log("fetching");
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
    console.log("url",beer.url)
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
        console.log("start-edit-beer",beer);
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
               console.log(response);
               return response.json()
            }).then((json)=>{
                console.log("response-beer",json);
                dispatch(editBeer(json));
            }
                   
                ).catch((error)=>{
                console.log("error",error,);
            }); 
        }
    }
