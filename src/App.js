import React, { Component } from 'react';
import { robots } from "./robots";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
// import { render } from '@testing-library/react';


class  App  extends Component {
    constructor(){
        super()
        this.state ={
            robots :  robots,
            searchfields :""
        }
    }
    OnsearchChange=(event)=>{
        this.setState({ searchfields: event.target.value })
        console.log(event.target.value);
        
        
    }
    render (){
        const filteredRobots= this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfields.toLowerCase());
        })
        return(
        <div className='tc'>
        <h1>Robofriends</h1>
        <SearchBox searchChange={this.OnsearchChange} />
            <CardList robots={filteredRobots}/>
    </div>
   
    
    ); }
}

export default App;