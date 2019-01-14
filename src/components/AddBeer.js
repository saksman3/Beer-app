import React from 'react';
export default class AddBeer extends React.Component{
    render(){
        return(
            <form>
                <input type="text"/>
                <input type="text"/>
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
                <button>Save</button>

            </form>
        );
    }
}