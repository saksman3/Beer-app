import React from 'react';
import {Link} from 'react-router-dom'

const Category=(props)=>{
    const url = props.category.url;
    const id = url.substr(url.lastIndexOf('/')-1).slice(0,1);
  return (
      <div>
           <Link to={`/category/${id}`}>
           <p>{props.index+1}-{props.category.name} - {props.category.url}</p>
           
           </Link>
           
      </div>
  );
}
export default Category;