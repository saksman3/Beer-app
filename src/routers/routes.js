import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import AddBeer from '../components/AddBeer';
import Header from '../components/Header';
import ViewBeers from '../components/ViewBeers';
import {connect} from 'react-redux';
import {fetchCategories} from '../actions/categories';
import EditBeer from '../components/EditBeer';
import BeerDetails from '../components/BeerDetails';
import SearchBeers from '../components/Search';
import {fetchData} from '../actions/beers';
import input from '../components/inputComponent'
class  AppRoutes extends React.Component{
    componentDidMount()
    {
        this.props.fetchCategories();
        this.props.fetchData();
        
        
       
    }
    render(){
    return (
        <BrowserRouter>
            <div className="home">
               <Header/>
               <Switch>
                      <Route path="/" component={Dashboard} exact={true}/>
                      <Route path="/category/:id" component={ViewBeers}/>
                      <Route path="/create" component={AddBeer}/>
                      <Route path="/input" component={input}/>
                      <Route path="/beer/:id" component={BeerDetails}/>
                      <Route path="/edit/:id" component={EditBeer}/>
                      <Route path="/beer_search" component={SearchBeers}/>

               </Switch>
            </div>
        </BrowserRouter>
    )
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        fetchCategories:()=>dispatch(fetchCategories()),
        fetchData:()=>dispatch(fetchData())
    };
}
export default connect(undefined,mapDispatchToProps)(AppRoutes);