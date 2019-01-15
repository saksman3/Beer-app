import {createStore, combineReducers,applyMiddleware} from 'redux';
import beersReducer from '../reducers/beersReducer';
import filtersReducer from '../reducers/filtersReducer';
import categoriesReducer from '../reducers/CategoriesReducer';
import thunk from 'redux-thunk';
export default ()=>{
    const store =createStore(
        combineReducers({
            categories:categoriesReducer,
            Beers:beersReducer,
            filters:filtersReducer
        }),applyMiddleware(thunk)
    );
  /*   store.subscribe(()=>{
        console.log(store.getState());
    }); */
    return store;
}