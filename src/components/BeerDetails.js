import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const BeerDetails=(props)=>{
        return (
            <div>
               <p>Name : {props.beer.name}</p>
               <p>Style : {props.beer.style}</p>
               <p>Calories : {props.beer.calories}</p>
               <p>IBU : {props.beer.ibu}</p>
               <p>ABV : {props.beer.abv}</p>
               <Link to={`/edit/${props.match.params.id}`}>edit</Link>
            </div>
        );
    }
const MapStateToProps=(state,props)=>{

    return {
        beer:state.Beers.find((beer,index,arr)=>{
            if(index===parseInt(props.match.params.id,10)){
                return beer;
            }
               
        })
    }
}
    
export default connect(MapStateToProps)(BeerDetails);