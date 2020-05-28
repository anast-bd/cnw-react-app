import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

	let dialogsElements = props.state.dialogs.map (d => <DialogItem name={d.name} id={d.id} image={d.image} />);
	let messagesElements = props.state.messages.map (m => <Message message={m.message} />);
	
	let newMessageElement = React.createRef();
	
	let sendMessage = () => {
		let text = newMessageElement.current.value;
		alert(text);
	}
	
	
	return (
		<div className={s.dialogs}>
			
			<div className={s.dialogsItems}>		
				{ dialogsElements } 
			</div>
			
			<div className={s.chat}>
				<div className={s.chatHeader}>
					{props.state.dialogs[0].name}
				</div>
				<div className={s.messages}>
					{ messagesElements }
				</div>
				<div className={s.chatFooter}>
					<textarea ref={newMessageElement} placeholder='Enter your message ...'></textarea>
					<div>
						<button onClick={sendMessage}>Send</button> 
					</div>
				</div>
			</div>

		</div>
	)
}

export default Dialogs;