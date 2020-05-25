import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
	{id: 1, name:'Kasablanka'},
	{id: 2, name:'Knopfen'},
	{id: 3, name:'Stegosaurus'},
	{id: 4, name:'Kosko'},
	{id: 5, name:'Murrz'},
]

let messages = [
	{id: 1, message:'I like Queen'},
	{id: 2, message:'The Queen or THE Queen?'},
	{id: 3, message:"THE Queen. She's just an icon of style."},
	{id: 4, message:'Yaaas, hail the Queen!'},
	{id: 5, message:'God '} 
]

let posts = [
	{id: 1, message: 'Ribbit! Ribbit ribbit.', likesCount: '800'},
	{id: 2, message: 'Ribbit ribbit, ribbit. Ribbit?.', likesCount: '1250'},
	{id: 2, message: 'Ribbit ribbit rib-ribbit ribbit!', likesCount: '958'},
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
