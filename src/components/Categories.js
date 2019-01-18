import React from 'react';
import {connect} from 'react-redux';
import Category from './Category';
import Modal from './Modal';
import {startAddCategory} from '../actions/categories';
class Categories extends React.Component{
   handleSave = (category)=>{
    this.props.startAddCategory(category);
   }
   render(){
    return (
        <div>
            <div className="widget-header">
            <h3 className="widget_header__title">Categories</h3>
            <Modal save={this.handleSave} mode="Add"/>
           </div>
           
        {
            this.props.categories === 0?(<p>No categories</p>):(
                this.props.categories.map((category,key)=>{
                   return  <Category category={category} index={key}key={key}/>

                })
            )
        }
        </div>
        );
   }
}
const mapStateToProps = (state)=>{
    return {
        categories:state.categories
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        startAddCategory:(category)=>dispatch(startAddCategory(category)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Categories);