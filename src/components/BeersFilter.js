import React from 'react';
import {connect} from 'react-redux'
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
            <div>
                <input type="text" onChange={this.onTextChange}/>
                <select onChange={this.onSortChange}>
                     <option value="date">Date</option>
                     <option value="name">Name</option>
                </select>
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