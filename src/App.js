import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

function App() {
	
	let DialogsComponent = () => <DialogsContainer />;
	let UsersComponent = () => <UsersContainer />;
	
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<Sidebar />
				<div class='app-wrapper-content'>
					<Route path='/profile' render={ () => <Profile /> } />
					<Route exact path='/dialogs' render={ DialogsComponent } />
					<Route exact path='/users' render={ UsersComponent } />
					
				</div>
			</div>
		</BrowserRouter>
	);
}


export default App;
