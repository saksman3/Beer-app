import React from 'react';
import {connect} from 'react-redux';
import {setNameFilter,sortByDate,sortByName} from '../actions/filters'
class BeersFilter extends React.Component{
    onSortChange = (e)=>{
      if(e.target.value==='date'){
          this.props.sortByDate();
      }else if(e.target.value==='name'){
          this.props.sortByName();
      }
    }
    onTextChange=(e)=>{
        this.props.setNameFilter(e.target.value)
    }
    render(){
        return(
            <div className="content-container">
                 <div className="input-group">
                    <div className="input-group__item">
                        
                        <input className="text-input" type="text" placeholder="filter" onChange={this.onTextChange}/>
                    </div>  
                    <div className="input-group__item">
                            <select className="select_" 
                            onChange={this.onSortChange}
                            value={this.props.filters.sorty}
                            >
                                <option value="date">Date</option>
                                <option value="name">Name</option>
                            </select>
                    </div>    
                 </div>
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
  return {
      filters:state.filters
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    setNameFilter:(name)=>dispatch(setNameFilter(name)),
    sortByDate:()=>dispatch(sortByDate()),
    sortByName:()=>dispatch(sortByName()),
  }

}
export default connect(mapStateToProps,mapDispatchToProps)(BeersFilter);