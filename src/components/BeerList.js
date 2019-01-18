import React from 'react';
import {connect} from 'react-redux';
import selectBeers from '../selectors/beersSelectors';
import Beer from './Beer';
class BeerList extends React.Component{
   render(){
       
    return(
        <div className="content-container">
          <div className="list-body">
                {
                    this.props.beers.length === 0?(
                        <div className="list-item list-item--message">
                           <span>No Beers</span>
                        </div>
                    ):(
                    this.props.beers.map((beer,index)=>{
                        return <Beer beer={beer} key={index} index={index}/>
                     })
                    )
                 }
          </div>

        </div>
    );
   }
}
const mapStateToProps = (state)=>{
    
    return {
        beers:selectBeers(state.Beers,state.category,state.filters)
        
    }
}
export default connect(mapStateToProps)(BeerList);