import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardComponent from './CardComponent';
import 'tachyons';
import registerServiceWorker from './registerServiceWorker';
import {robots} from './robots';

ReactDOM.render(
	<CardComponent robots={robots}/>
	, document.getElementById('root'));
registerServiceWorker();
