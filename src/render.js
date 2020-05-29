import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export let rerenderEntireTree = (state) => {
	ReactDOM.render(
	  <React.StrictMode>
		<App state={state} addPost={state.addPost} updageNewPostText={state.updageNewPostText} />
	  </React.StrictMode>,
	  document.getElementById('root')
	);
}