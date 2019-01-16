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
            <div>
                <form className="search_form" onSubmit={this.onSubmit}>
                <input type="text" name="text"className="search_items_input" placeholder="search beer"/>
                <button className="btn search_items_btn">Search</button>
                </form>
                {
                   this.props.search.map((beer,index)=>{
                       return <Beer index={index} key={index} beer={beer}/>
                   })
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