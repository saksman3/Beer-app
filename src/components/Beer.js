import React from 'react';
import {Link} from 'react-router-dom';
const Beer = (props)=>{
    console.log(props.beer);
    return(
       <div className="flex-child">
           <p className="beer_title"> {props.beer.name}</p>
            <p> {props.beer.style}</p>
            <p className="brewery Location">{props.beer.brewery_location}</p>
            <Link className="btn btn-primary" to={`/beer/${props.index}`}>  
               view
            </Link>    
       </div>

    );
}
export default Beer;