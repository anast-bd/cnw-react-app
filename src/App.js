import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';

function App(props) {
	
	let DialogsComponent = () => <Dialogs dialogsPage={props.state.dialogsPage}
										  dispatch={props.dispatch}/>;
	let ProfileComponent ;
	let MusicComponent = () => <Music />;
	let NewsComponent = () => <News />;
	let SettingsComponent = () => <Settings />;
	
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<Sidebar />
				<div class='app-wrapper-content'>
					<Route path='/profile' 
						render={ () => <Profile store = {props.store} /> }
					/>
					<Route exact path='/dialogs' render={ DialogsComponent } />
					<Route path='/music' component={ MusicComponent } />
					<Route path='/news' component={ NewsComponent } />
					<Route path='/settings' component={ SettingsComponent } />
				</div>
			</div>
		</BrowserRouter>
	);
}


export default App;
