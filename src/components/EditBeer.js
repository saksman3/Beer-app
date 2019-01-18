import React from 'react';
import BeerForm from './BeerForm';
import {connect} from 'react-redux';
import {startEditBeer} from '../actions/beers';
import {fetchData} from '../actions/beers';

class EditBeer extends React.Component{
    onSubmit =(beer)=>{
        const beerID = this.props.match.params.id;
        this.props.startEditBeer(beer);
        console.log("edit beer",beer);
        this.props.fetchData();
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
        startEditBeer:(beer)=>dispatch(startEditBeer(beer)),
        fetchData:()=>dispatch(fetchData()),
    }
}
const mapStateToProps = (state)=>{
    return {
        beer:state.beer,
        categories:state.categories
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(EditBeer)

