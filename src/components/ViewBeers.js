import React from 'react';
import BeerList from './BeerList';
import BeersFilter from './BeersFilter'
const ViewBeers = (props)=>{
    console.log("view",props);
    return (
        <div className="beers_list">
           <div className="filters">
              <BeersFilter/>
           </div>
           <div className="beers-wrapper">
               <BeerList category={parseInt(props.match.params.id,10)}/>
           </div>
           
        </div>
    )
}
export default ViewBeers;