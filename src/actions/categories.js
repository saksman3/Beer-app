const recieveCategories = (json)=>{
    return {
        type:'FETCH_CATEGORIES',
        categories:json
    }
}

export const fetchCategories = ()=>{
    return (dispatch)=>{
        fetch('http://apichallenge.canpango.com/categories').then((data)=>{
            return data.json();
        }).then((json)=>dispatch(recieveCategories(json)));
    }
}