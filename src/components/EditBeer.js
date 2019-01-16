import React from 'react';
import BeerForm from './BeerForm';
import {connect} from 'react-redux';
import {editBeer} from '../actions/beers'

class EditBeer extends React.Component{
    onSubmit =(beer)=>{
        const beerID = this.props.match.params.id;
        this.props.editBeer(beerID,beer)
        console.log("edit",this.props.beer);
        
        this.props.history.push(`/beer/${beerID}`);
    }
    render(){
        return(
            <div>
                <BeerForm 
                    onSubmit={this.onSubmit}
                    beer={this.props.beer}
                    categories={this.props.categories}
                    disabled={true}
                />
                         
            </div>

        );
    }
}
const mapDispatchToProps = (dispatch,props)=>{   
    return {
         editBeer:(id,beer)=>dispatch(editBeer(id,beer)),
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

