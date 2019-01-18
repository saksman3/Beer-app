import React from 'react';
import BeerForm from './BeerForm';
import {connect} from 'react-redux'
import {startAddBeer} from '../actions/beer';
 class AddBeer extends React.Component{
    onSubmit = (beer)=>{
        
      this.props.startAddBeer(beer);
      this.props.history.push('/');
    }
    render(){
        return(
            <div className="content-container">
                <BeerForm
                onSubmit={this.onSubmit}
                categories={this.props.categories}
                
                />
            </div>
            
        );
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        
        startAddBeer:(beer)=>dispatch(startAddBeer(beer)),
        
    }
}
const mapStateToProps = (state)=>{
    
    return {
        categories:state.categories
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddBeer)