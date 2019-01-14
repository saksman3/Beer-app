import React from 'react';
import BeerList from './BeerList';
import BeerListFilter from './BeersFilter';

class Dashboard extends React.Component{
    render(){
        return (
           <div>
              <p>Beers</p>
              <BeerListFilter/>
              <BeerList/>
           </div>
        );
    }
}
export default Dashboard;