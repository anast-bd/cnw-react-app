import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/store';

const Dialogs = (props) => {

	let dialogsElements = props.dialogsPage.dialogs.map (d => <DialogItem name={d.name} id={d.id} image={d.image} />);
	let messagesElements = props.dialogsPage.messages.map (m => <Message message={m.message} />);
	let newMessageBody = props.dialogsPage.newMessageBody;
	
	let onSendMessageClick = () => {
		props.dispatch(sendMessageCreator());
	}
	
	let onNewMessageChange = (event) => {
		let body = event.target.value;
		props.dispatch(updateNewMessageBodyCreator(body));
	}
	
	
	return (
		<div className={s.dialogs}>
			
			<div className={s.dialogsItems}>		
				{ dialogsElements } 
			</div>
			
			<div className={s.chat}>
				<div className={s.chatHeader}>
					{props.dialogsPage.dialogs[0].name}
				</div>
				<div className={s.messages}>
					<div>{ messagesElements }</div>
				</div>
				<div className={s.chatFooter}>
					<div><textarea value={newMessageBody} 
							 		placeholder='Enter your message ...'
									onChange={onNewMessageChange} >
					</textarea></div>
					<div><button onClick={ onSendMessageClick }>Send</button></div>
				</div>
			</div>

		</div>
	)
}

export default Dialogs;