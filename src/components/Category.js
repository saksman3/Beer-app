import React from 'react';
import {Link} from 'react-router-dom'

const Category=(props)=>{
  return (
      <div className="category">
         <p className="category_text">{props.index+1}. {props.category.name} </p>
           <Link to={`/category/${props.index}`}>View</Link>
      </div>
  );
}
export default Category;