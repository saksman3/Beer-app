import React from 'react';
import {connect} from 'react-redux';
import Beer from './Beer';
import {startSearch} from '../actions/search';

class Search extends React.Component{
    
    onSubmit = (e)=>{
      e.preventDefault();
     
      const text = e.target.text.value;
      this.props.startSearch(text);
    }
    render(){
        return (
                <div className="content-container">
                  <div className="form-wrapper">
                    <form className="form" onSubmit={this.onSubmit}>
                        <div className="input-group">
                        <input type="text" name="text" className="text-input required" placeholder="enter beer name" required/>
                        <button className="search_button">Search</button>
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
    return{
        search:state.searchResult,
        
    }
}
export default connect(MapStateToProps,MapDispatchToProps)(Search);