import React from 'react';
import {Link} from 'react-router-dom';
export default class Beer extends React.Component{
    render(){
        return(
            <div>
               <Link to={`/edit/${id}`}>
                  <p>beer</p>
               </Link>
               
            </div>
        );
    }
}