import React from 'react';
import BeerList from './BeerList';
import BeersFilter from './BeersFilter';
import {connect} from 'react-redux';
import Modal from './Modal';
import {startEditCategory} from '../actions/categories';
class ViewBeers extends React.Component{
    state={
        name:this.props.category.name
    }
    onClick=(category)=>{
       this.props.startEditCategory(category);
       this.setState(()=>({name:category.name}))
    }
    render(){
        return (
            <div className="beers_list">
                 <h2 className="category_name">{this.state.name}</h2>
                 <h2 className="category_name">
                    <Modal category={this.props.category} 
                         save={this.onClick} mode="Edit"
                    />
                </h2>
               <div className="filters">
                  <BeersFilter/>
               </div>
                   <BeerList category={this.props.category}/>
            </div>
        )
    }
  
}
const mapStateToProps=(state)=>{
    return {
         category:state.category?state.category:{}
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        startEditCategory:(category)=>dispatch(startEditCategory(category)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ViewBeers);