import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchBeer} from '../actions/beer';
class Beer extends React.Component{
   onView = ()=>{
      this.props.fetchBeer(this.props.beer);

   }
   render(){
      return(
         <div className="flex-child">
             <p className="beer_title"> {this.props.beer.name}</p>
              <p>{this.props.beer.style}</p>
              <p className="brewery Location">{this.props.beer.brewery_location}</p>
              <Link onClick={this.onView} className="btn btn-primary" to={`/beer/${this.props.index}`}>  
                 view
              </Link>    
         </div>
  
      );
   }
}
const MapDispatchToProps = (dispatch)=>{
   return {
        fetchBeer:(beer)=>dispatch(fetchBeer(beer))
   }
}
export default connect(undefined,MapDispatchToProps)(Beer);