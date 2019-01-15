import React from 'react';
import {connect} from 'react-redux';
import selectBeers from '../selectors/beersSelectors';
import Beer from './Beer';
const BeerList =(props)=>{
    console.log(props)
    const api_url = `http://apichallenge.canpango.com/category/${props.category}/`
    return(
        <div>
           {
               props.beers.length === 0?(<p>no beers</p>):(
                   props.beers.map((beer,key)=>{
                      if(beer.category === api_url){
                          return <Beer key={key} index={key} beer={beer}/>
                      }
                   })
               )
           }
        </div>
    );
}
const mapStateToProps = (state)=>{
    return {
        beers:selectBeers(state.Beers,state.filters)
    }
}
export default connect(mapStateToProps)(BeerList);