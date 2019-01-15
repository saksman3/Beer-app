import React from 'react';
import BeerList from './BeerList';
import BeersFilter from './BeersFilter'
const ViewBeers = (props)=>{
    console.log("view",props);
    return (
        <div>
           <BeersFilter/>
           <BeerList category={parseInt(props.match.params.id,10)}/>
        </div>
    )
}
export default ViewBeers;