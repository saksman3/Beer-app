
const recieveBeers = (json)=>{
    console.log('my-array',json);
    return {
        type:'FETCH_DATA',
        beers:json
    }
}


export const fetchData = ()=>{
    return (dispatch)=>{
        fetch('http://apichallenge.canpango.com/beers/').then((data)=>{
            
            return data.json();
        }).then((json)=>{
            dispatch(recieveBeers(json))
            console.log("data after edit",json);

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
            method:'put',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(beer)
           }).then((response)=>{
               console.log(response);
               return response.json()
            }).then(()=>{
                dispatch(editBeer(beer));
            }
                   
                ).catch((error)=>{
                console.log("error",error,);
            }); 
        }
    }
