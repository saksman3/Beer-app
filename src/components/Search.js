import React from 'react';
import {connect} from 'react-redux';
import Beer from './Beer';
import {startSearch} from '../actions/search';

class Search extends React.Component{
    onSubmit = (e)=>{
      e.preventDefault();
      const text = e.target.text.value;
      //this.props.search(text);
      this.props.startSearch(text);
    }
    render(){
        console.log("search-a",this.props.search);
        return (
            <div className="container">
                <div className="form-container">
                    <form className="search_form" onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <input type="text" name="text" className="search_items_input form-control col-md-6" placeholder="enter beer name"/>
                    <button className="search_items_btn col-md-2">Search</button>
                    </div>
                    
                    
                    </form>
                </div>
                
                {
                   this.props.search.length===0?(<p className="no_beer">No beers to display</p>):(this.props.search.map((beer,index)=>{
                       return <Beer index={index} key={index} beer={beer}/>
                   }))
                }
                </div>
          
        );
    }
}
const MapDispatchToProps=(dispatch)=>{
    return{
     
        startSearch:(text)=>dispatch(startSearch(text))
    }
}
const MapStateToProps=(state)=>{
    console.log("search",state);
    return{
        search:state.searchResult,
        
    }
}
export default connect(MapStateToProps,MapDispatchToProps)(Search);