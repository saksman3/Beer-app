import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {startRemove} from '../actions/beers'

class BeerDetails extends React.Component{
    removeFunct = ()=>{
        this.props.startRemove(this.props.beer);
    }
       render(){
            return (
                <div className="beer_details">
                  <div className="beer_details_content">
                  <p>Name : {this.props.beer.name}</p>
                  <p>Style : {this.props.beer.style}</p>
                  <p>Calories : {this.props.beer.calories}</p>
                  <p>IBU : {this.props.beer.ibu}</p>
                  <p>ABV : {this.props.beer.abv}</p>
                  <p>breweryLocation : {this.props.beer.brewery_location}</p>
                  <Link to={`/edit/${this.props.match.params.id}`}>edit</Link>
                  <button className="btn btn-danger"onClick={this.removeFunct}>Remove</button>                   
                  </div>
                  

                </div>
            );
       }
    }
const MapStateToProps=(state,props)=>{

    return {
        beer:state.Beers.find((beer,index)=>{
            if(index===parseInt(props.match.params.id,10)){
                return beer;
            }
               
        })
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        startRemove: (beer) => dispatch(startRemove(beer))
    }
}
    
export default connect(MapStateToProps,mapDispatchToProps)(BeerDetails);