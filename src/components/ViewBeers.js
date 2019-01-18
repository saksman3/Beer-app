import React from 'react';
import BeerList from './BeerList';
import BeersFilter from './BeersFilter';
import {connect} from 'react-redux';
const ViewBeers = (props)=>{

    return (
        <div className="beers_list">
             <p className="list-item">{}</p>
           <div className="filters">
              <BeersFilter/>
           </div>
               <BeerList category={props.category}/>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return {
         category:state.category?state.category:{}
    }
}
export default connect(mapStateToProps)(ViewBeers);