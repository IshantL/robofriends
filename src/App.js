import React,{Component} from 'react';
import CardComponent from './CardComponent';
import {robots} from './robots';
import SearchBox from'./SearchBox';
import './App.css';

class App extends Component{
	constructor(){
			super()
			this.state={
			robots:[],
			searchfield:''
		}
	}
componentDidMount(){
	fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
		return response.json();
	})
	.then(users=>
	this.setState({robots:users})
	)
}
onSearchChange=(event)=>{
	this.setState({searchfield:event.target.value})
	
}

	render(){
		const filteredRobots=this.state.robots.filter(robots=>{
		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
	})
	console.log(filteredRobots);
	if(this.state.robots.length===0){
		return <h1>Loading</h1>
	}else{
		return(
		<div className='tc'>
		<h1>Robot Friends</h1>
		<SearchBox searchChange={this.onSearchChange}/>
		<CardComponent robots={filteredRobots}/>	
		</div>
		)
	}
	}
}

export default App;
