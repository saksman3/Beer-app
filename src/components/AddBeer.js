import React from 'react';
import BeerForm from './BeerForm';
import {connect} from 'react-redux'
import {startAddBeer} from '../actions/beers';
 class AddBeer extends React.Component{
    onSubmit = (beer)=>{
        console.log(beer);
      this.props.startAddBeer(beer);
      this.props.history.push('/');
    }
    render(){
        return(
            <div className="add_beer">
                <h1 className="beer-text">Add Beer</h1>
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
    console.log(state);
    return {
        categories:state.categories
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddBeer)