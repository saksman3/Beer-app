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
export const editCategory=(category)=>{
    return {
        type:'EDIT_CATEGORY',
        category
    }
}
export const addCategory=(category)=>{
    return{
        type:'ADD_CATEGORY',
        category
    }
}
export const startAddCategory=(category)=>{
   return(dispatch)=>{
      fetch('http://apichallenge.canpango.com/categories/',{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(category)
      }).then((response)=>{
          return response.json();
      }).then((responseJson)=>{
          dispatch(addCategory(responseJson));

      });
   }
}
export const startEditCategory = (category)=>{
    return(dispatch)=>{
        fetch(category.url,{
            method:'PUT',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(category)
        }).then((response)=>{
             if(response.ok){
                 return response.json()
             }
             else{
                 console.log("something went wrong")
             }
        }).then(()=>{
            dispatch(editCategory(category));
        }).catch((error)=>{
            console.log(error,"error occured");
        });
        
    }
}