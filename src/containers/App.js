import React,{Component} from 'react';
import CardComponent from '../components/CardComponent';
import {robots} from '../robots';
import SearchBox from'../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

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
		//const{robots,searchfield}=this.state;
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
		<Scroll>
		<CardComponent robots={filteredRobots}/>
		</Scroll>	
		</div>
		)
	}
	}
}

export default App;
