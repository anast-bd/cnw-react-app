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
	
	let DialogsComponent = () => <Dialogs 
									 dialogs={props.appState.dialogs} 
									 messages={props.appState.messages} />;
	let ProfileComponent = () => <Profile 
									 posts={props.appState.posts} />;
	let MusicComponent = () => <Music />;
	let NewsComponent = () => <News />;
	let SettingsComponent = () => <Settings />;
	
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<Sidebar />
				<div class='app-wrapper-content'>
					<Route path='/profile' component={ ProfileComponent }/>
					<Route exact path='/dialogs' component={ DialogsComponent } />
					<Route path='/music' component={ MusicComponent } />
					<Route path='/news' component={ NewsComponent } />
					<Route path='/settings' component={ SettingsComponent } />
				</div>
			</div>
		</BrowserRouter>
	);
}


export default App;
