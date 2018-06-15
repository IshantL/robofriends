import React,{Component} from 'react';
import CardComponent from './CardComponent';
import {robots} from './robots';
import SearchBox from'./SearchBox';
import './App.css';

class App extends Component{
	constructor(){
			super()
			this.state={
			robots:robots,
			searchfield:''
		}
	}

onSearchChange=(event)=>{
	this.setState({searchfield:event.target.value})
	
}

	render(){
		const filteredRobots=this.state.robots.filter(robots=>{
		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
	})
	console.log(filteredRobots);
	return(
 	<div className='tc'>
 	<h1>Robot Friends</h1>
 	<SearchBox searchChange={this.onSearchChange}/>
 	<CardComponent robots={filteredRobots}/>	
 </div>
 )
	}
}

export default App;
