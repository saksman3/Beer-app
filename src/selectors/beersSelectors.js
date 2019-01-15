export default(beers,{name="",sortBy="date"})=>{
    return beers.filter((beer)=>{
      const nameMatch =beer.name.toLowerCase().includes(name.toLowerCase());
      return nameMatch;
    }).sort((a,b)=>{
      if(sortBy === 'date'){
          return a.createdOn < b.createdOn ? -1 : 1;
      }else if(sortBy === 'name'){
          return a.name < b.name ? 1 : -1;
      }
   });
}

