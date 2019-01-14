import React from 'react';
export default class BeersFilter extends React.Component{
    onSortChange = (e)=>{
      if(e.target.value==='date'){
          this.props.sortByDate();
      }else if(e.target.value==='name'){
          this.props.sortByName();
      }
    }
    onTextChange=(e)=>{
        this.props.setTextFilter(e.target.value)
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