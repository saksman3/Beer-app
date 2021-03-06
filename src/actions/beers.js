export const addBeer = (beer)=>{
    return{
        type:'ADD_BEER',
        beer
    }
}
export const editBeer = (id,updates)=>{
    return {
        type:'EDIT_BEER',
        id,
        updates
    }
}
export const removeBeer = ({id}={})=>{
    return {
        type:'REMOVE_BEER',
        id

    }
}
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
        }).then((json)=>dispatch(recieveBeers(json)));    
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
            console.log("response",response);
            return response.json();
        }).then((responseJson)=>{
            dispatch(addBeer({
            name:responseJson.name,
            ...beer
        }))}).catch((error)=>{
            console.log("Error!",error);
        });
    }
}
export const startRemove=(beer)=>{
    return(dispatch)=>{
        fetch(beer.url,{
            method:'DELETE',
            mode:'cors',
            headers:{
                 contenttype:'application/json',
                 
            },
            
        }).then((response)=>{
            console.log(response.json());
            return response.json();}

        ).then((json)=>{
            console.log(json);
        })
      }
    };
    export const startEditBeer = (id,beer)=>{
        console.log("start-edit-beer",beer,id);
        return (dispatch)=>{
           fetch('http://apichallenge.canpango.com/beers/135/',{
            method:'put',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(beer)
           }).then((response)=>{
               console.log(response);
               return response.json()
            }).then(dispatch(editBeer(id,beer))).catch((error)=>{
                console.log("error",error,JSON.stringify(beer));
            }); 
        }
    }

   