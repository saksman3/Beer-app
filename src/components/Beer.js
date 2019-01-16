import React from 'react';
import {Link} from 'react-router-dom';
const Beer = (props)=>{
    console.log(props.beer);
    return(
        <div className="card">
         <div className="card-body">
            <h5 className="card-title">{props.beer.name}</h5>
            <p> {props.beer.style}</p>
            <p>{props.beer.category}</p>
         </div>
           <Link className="btn btn-primary" to={`/beer/${props.index}`}>  
              view
           </Link> 
        </div>
    );
}
export default Beer;