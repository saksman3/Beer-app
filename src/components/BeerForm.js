import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
class BeerForm extends React.Component{
    state = {
        name:this.props.beer? this.props.beer.name:'',
        ibu:this.props.beer?this.props.beer.ibu:0,
        calories:this.props.beer?this.props.beer.calories:0,
        abv:this.props.beer?this.props.beer.abv:"",
        style:this.props.beer?this.props.beer.style:"",
        brewery_location:this.props.beer?this.props.beer.brewery_location:"",
        created_on:this.props.beer?moment(this.props.beer.created_on):moment(),
        category:this.props.beer?this.props.beer.category:undefined,
        error:'',
        calendarFocused:false

    }
    onNameChange = (e)=>{
       const name = e.target.value;
       this.setState(()=>({name}));
    }
    onStyleChange = (e)=>{
      const style = e.target.value;
      this.setState(()=>({style}));
    }
    onBreweryChange = (e)=>{
        const brewery_location = e.target.value;
        this.setState(()=>({brewery_location}));
    }
    onIbuChange = (e)=>{
        const ibu = e.target.value;
        this.setState(()=>({ibu}));
    }
    onCaloriesChange = (e)=>{
        const calories = e.target.value;
        this.setState(()=>({calories}));
    }
    CategoryChange = (e)=>{
       const category = e.target.value;
       this.setState(()=>({category}));
    }
    onDateChange=(created_on)=>{
       if(created_on){
           this.setState(()=>({created_on}));
       }
    }
    onFocusChange = ({focused})=>{
       this.setState(()=>({calendarFocused:focused}));
    }
    onSubmitHandler = (e)=>{
        console.log("submitting");
       e.preventDefault();
       if(!this.state.name || !this.state.brewery_location || !this.state.ibu || !this.state.style){
           console.log("error");
           this.setState(()=>{
               return {error:"Please enter mandatory fields."}
           });
       }else {
           this.setState(()=>({error:''}));
           this.props.onSubmit({
               name:this.state.name,
               ibu:this.state.ibu,
               calories:this.state.calories,
               abv:this.state.abv,
               style:this.state.style,
               brewery_location:this.state.brewery_location,
               created_on:this.state.created_on.valueOf(),
               category:this.state.category
           })
       }
    }
    render(){
        return (
            <div class="form-container">
               <div className="form-item">'
                    <form className="beer-form" onSubmit={this.onSubmitHandler}>
                    <div className="form-field">
                        <label for="beerName">Beer Name</label>
                        <input type="text" 
                        placeholder="beer Name..."
                        autoFocus
                        value = {this.state.name}
                        onChange={this.onNameChange}
                        name="beerName"
                        />                    
                    </div>
                    <div className="form-field">
                        <label for="style">style Name</label>
                        <input type="text" 
                        placeholder="Style"
                        value = {this.state.style}
                        onChange={this.onStyleChange}
                        name="style"
                        />                   
                    </div>
                    <div className="form-field">
                        <label for="breweryLocation">Brewery Location</label>
                        <input type="text" 
                        placeholder="breweryLocation"
                        value = {this.state.brewery_location}
                        onChange={this.onBreweryChange}
                        name="breweryLocation"
                        />                    
                    </div>
                    <div className="form-field">

                        <label for="ibu">IBU</label>
                        <input type="number" 
                        placeholder="ibu"
                        value = {this.state.ibu}
                        onChange={this.onIbuChange}
                        name="ibu"
                        /> 
                    </div>
                    <div className="form-field">
                        <label for="calories">calories</label>    
                        <input type="number" 
                        placeholder="calories"
                        value = {this.state.calories}
                        onChange={this.onCaloriesChange}
                        name="calories"
                        /> 
                    </div>
                    <div className="form-item">
                        <label for="category">category</label>              
                        <select
                        value={this.state.category}
                        name="category"
                        onChange={this.CategoryChange}
                        disabled={this.props.disabled}
                        >
                        <option>Select</option>
                        {
                            this.props.categories.map((category,index)=>{
                                return <option key={index}value={category.url}>{category.name}</option>
                            })
                        }
                        </select>
                    </div>
                    <div className="form-field">
                        <label for="created_on">created on</label> 
                        <SingleDatePicker
                            date={this.state.created_on}
                            onDateChange={this.onDateChange}
                            focused={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                        />
                    </div>

                    <button className="form-field">Save Beer</button>

            </form>
               </div>
                
            </div>
        );
    }
}
export default BeerForm;