export default(beers,category,{name="",sortBy=""})=>{
    console.log("here",category);
    return beers.filter((beer)=>{
      const categoryMatch = category && beer.category === category.url;
      const nameMatch =beer.name.toLowerCase().includes(name.toLowerCase());
      console.log("sorting",nameMatch);
      return nameMatch && categoryMatch;
    }).sort((a,b)=>{
      if(sortBy === 'date'){
          return a.createdOn < b.createdOn ? -1 : 1;
      }else if(sortBy === 'name'){
          return a.name < b.name ? -1 : 1;
      }
   });
}

