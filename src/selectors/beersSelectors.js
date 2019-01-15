export default(beers,category,{name="",sortBy=""})=>{
    console.log("cat",category[0].url);
    return beers.filter((beer)=>{
      const categoryMatch = beer.category === category[0].url;
      let nameMatch=false;
      if(categoryMatch){
         nameMatch =beer.name.toLowerCase().includes(name.toLowerCase());
      }
      return nameMatch;
    }).sort((a,b)=>{
      if(sortBy === 'date'){
          return a.createdOn < b.createdOn ? -1 : 1;
      }else if(sortBy === 'name'){
          return a.name < b.name ? 1 : -1;
      }
   });
}

