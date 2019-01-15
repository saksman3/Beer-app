import React from 'react';
import {Link} from 'react-router-dom';
const Beer = (props)=>{
    return(
        <div>
           <Link to={`/beer/${props.index}`}>
              <p>{props.beer.name} {props.beer.style}</p>
              <p>{props.beer.category}</p>
           </Link> 
        </div>
    );
}
export default Beer;