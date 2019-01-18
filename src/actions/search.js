export const search=(text)=>{
    return {
        type:'SEARCH_BEERS',
        text
    }
}
export const receiveResults = (result)=>{
    return {
        type:'FETCH_BEERS',
        result:result
    }
}
export const startSearch=(searchText)=>{
    return (dispatch=>{
        fetch(`http://apichallenge.canpango.com/beers/search/?q=${searchText}`).then((response)=>{
            return response.json();
        }).then((responseJson)=>{
           dispatch(receiveResults(responseJson));
         
        }).catch((err)=>{
            console.log(err);
        });
    })
}