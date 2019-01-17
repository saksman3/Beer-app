import {createStore, combineReducers,applyMiddleware} from 'redux';
import beersReducer from '../reducers/beersReducer';
import filtersReducer from '../reducers/filtersReducer';
import categoriesReducer from '../reducers/CategoriesReducer';
import {SearchReducer} from '../reducers/SearchReducer';
import beerReducer from '../reducers/beerReducer';
import thunk from 'redux-thunk';
export default ()=>{
    const store =createStore(
        combineReducers({
            categories:categoriesReducer,
            Beers:beersReducer,
            filters:filtersReducer,
            searchResult:SearchReducer,
            beer:beerReducer
        }),applyMiddleware(thunk)
    );
     store.subscribe(()=>{
        console.log("store",store.getState());
    }); 
    return store;
}