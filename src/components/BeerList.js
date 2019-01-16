import React from 'react';
import {connect} from 'react-redux';
import selectBeers from '../selectors/beersSelectors';
import Beer from './Beer';
const BeerList =(props)=>{
    return(
        <div>
           {
               props.beers.length === 0?(<p>No beers.</p>):(
                   props.beers.map((beer,index)=>{
                      return <Beer beer={beer} key={index} index={index}/>
                   })
               )
           }
        </div>
    );
}
const mapStateToProps = (state,props)=>{
    const category = state.categories.filter((category,index)=>{
        if(index===parseInt(props.category)){
            return category
        }
          
    });
    return {
        beers:selectBeers(state.Beers,category,state.filters)
        
    }
}
export default connect(mapStateToProps)(BeerList);