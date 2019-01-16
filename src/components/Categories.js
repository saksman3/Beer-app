import React from 'react';
import {connect} from 'react-redux';
import Category from './Category';
const Categories = (props)=>{
    return (
        <div>
            <div className="widget-header">
            <h3 className="widget_header__title">Categories</h3>
           </div>
        {
            props.categories === 0?(<p>No categories</p>):(
                props.categories.map((category,key)=>{
                   return  <Category category={category} index={key}key={key}/>

                })
            )
        }
        </div>
        );
}
const mapStateToProps = (state)=>{
    return {
        categories:state.categories
    }
}
export default connect(mapStateToProps)(Categories);