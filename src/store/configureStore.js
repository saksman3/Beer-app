import {createStore, combineReducers,applyMiddleware} from 'redux';
import beersReducer from '../reducers/beersReducer';
import filtersReducer from '../reducers/filtersReducer';
import categoriesReducer from '../reducers/CategoriesReducer';
import {SearchReducer} from '../reducers/SearchReducer';
import thunk from 'redux-thunk';
export default ()=>{
    const store =createStore(
        combineReducers({
            categories:categoriesReducer,
            Beers:beersReducer,
            filters:filtersReducer,
            searchResult:SearchReducer
        }),applyMiddleware(thunk)
    );
     store.subscribe(()=>{
        console.log(store.getState());
    }); 
    return store;
}