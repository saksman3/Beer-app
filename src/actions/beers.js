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
            body:JSON.stringify(beer)
        }).then((response)=>{
            return response.json();
        }).then((responseJson)=>dispatch(addBeer({
            name:responseJson.name,
            ...beer
        })));
    }
}