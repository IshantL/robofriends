import React from 'react';
import Card from './Card';
import {robots} from './robots';

const cardArray=robots.map((user,i)=>{
			return 	<Card id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
		})

			const CardComponent=({robots})=>{
			return(

			<div>
			{cardArray}
			</div>
			)
			}

export default CardComponent;
