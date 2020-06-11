import React from 'react';
import Dialogs from './Dialogs';
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/store';

const DialogsContainer = (props) => {
	
	let state = props.store.getState().dialogsPage;

	let onSendMessageClick = () => {
		props.store.dispatch(sendMessageCreator());
	}
	
	let onNewMessageChange = (body) => {
		let action = updateNewMessageBodyCreator(body);
		props.store.dispatch(action);	
	}
	
	return (
		<Dialogs dialogsPage = {state}
				sendMessage = {onSendMessageClick}
				updateNewMessageBody = {onNewMessageChange} />
	)
}

export default DialogsContainer;