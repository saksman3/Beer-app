import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchData} from '../actions/beers';
import {StoreCategory} from '../actions/category';

class Category extends React.Component{
  onClick = ()=>{
    //console.log("category");
    const category = this.props.category;
   
    this.props.fetchData();
    this.props.StoreCategory(category);
  }
   render(){
    return (

      <Link  to={`/category/${this.props.index}`} className="category">
         <p onClick={this.onClick} className="category_text">{this.props.index+1}. {this.props.category.name} </p>
          
      </Link>
     
  );
   }
}
const mapDispatchToProps = (dispatch)=>{
  
  return {
      fetchData:()=>dispatch(fetchData()),
      StoreCategory:(category)=>dispatch(StoreCategory(category))
  };
}
export default connect(undefined,mapDispatchToProps)(Category);