import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {removeBeer} from '../actions/beers'

class BeerDetails extends React.Component{
    removeFunct = ()=>{
        this.removeBeer(this.props.beer);
    }
       render(){
            return (
                <div>
                <p>Name : {this.props.beer.name}</p>
                <p>Style : {this.props.beer.style}</p>
                <p>Calories : {this.props.beer.calories}</p>
                <p>IBU : {this.props.beer.ibu}</p>
                <p>ABV : {this.props.beer.abv}</p>
                <p>Category : {this.props.beer.category}</p>
                <Link to={`/edit/${this.props.match.params.id}`}>edit</Link>
                <button>Remove</button>
                </div>
            );
       }
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
const mapDispatchToProps = (dispatch)=>{
    return {
        removeBeer: (beer) => dispatch(removeBeer(beer))
    }
}
    
export default connect(MapStateToProps,mapDispatchToProps)(BeerDetails);