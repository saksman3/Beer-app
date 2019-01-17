import React from 'react';
import {connect} from 'react-redux';
import selectBeers from '../selectors/beersSelectors';
import Beer from './Beer';
class BeerList extends React.Component{
   render(){
       
    return(
        <div className="beers-container">
           {
               this.props.beers.length === 0?(<p>No beers.</p>):(
                   this.props.beers.map((beer,index)=>{
                      return <Beer beer={beer} key={index} index={index}/>
                   })
               )
           }
        </div>
    );
   }
}
const mapStateToProps = (state,props)=>{
    const category = state.categories.find((category,index)=>{
        if(index===parseInt(props.category)){
            return category
        }
          
    });
    return {
        beers:selectBeers(state.Beers,category,state.filters)
        
    }
}
export default connect(mapStateToProps)(BeerList);