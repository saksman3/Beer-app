import React from 'react';
import BeerForm from './BeerForm';
import {connect} from 'react-redux';
import {startEditBeer} from '../actions/beers';

class EditBeer extends React.Component{
    onSubmit =(beer)=>{
        const beerID = this.props.match.params.id;
        this.props.startEditBeer(beerID,beer);
        console.log("edit beer",beer);
        
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
const mapDispatchToProps = (dispatch)=>{   
    return {
        startEditBeer:(id,beer)=>dispatch(startEditBeer(id,beer)),
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

