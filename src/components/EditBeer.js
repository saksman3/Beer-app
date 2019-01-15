import React from 'react';
import BeerForm from './BeerForm';
import {connect} from 'react-redux';
import {removeBeer,editBeer} from '../actions/beers'

class EditBeer extends React.Component{
    onSubmit =(beer)=>{
        this.props.editBeer(this.props.beer.name,beer)
        this.props.history.push('/');
    }
    onRemove = ()=>{
        this.props.removeBeer({name:this.props.beer.name})
    }
    render(){
        return(
            <div>
                <BeerForm 
                    onSubmit={this.onSubmit}
                    beer={this.props.beer}
                    categories={this.props.categories}
                />
                <button onClick={this.onRemove}>RemoveBeer</button>           
            </div>

        );
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
          editBeer:({id,beer})=>dispatch(editBeer(id,beer)),
          removeBeer:(id)=>dispatch(removeBeer(id))
    }
}
const mapStateToProps = (state,props)=>{
    return {
        beer:state.Beers.find((beer,index)=>{
            return index === parseInt(props.match.params.id,10)
        }),
        categories:state.categories
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(EditBeer)

