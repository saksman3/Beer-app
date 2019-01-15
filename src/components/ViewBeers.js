import React from 'react';
import BeerList from './BeerList';
import BeersFilter from './BeersFilter'
const ViewBeers = (props)=>{
    return (
        <div>
           <BeersFilter/>
           <BeerList category={props.match.params.id}/>
        </div>
    )
}
export default ViewBeers;