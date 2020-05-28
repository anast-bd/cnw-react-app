import React from 'react';
import s from './Chat.module.css';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatFooter from './ChatFooter/ChatFooter';

const Chat = (props) => {

	let messagesElements = props.state.map (m => <Message message={m.message} />);

	return (	
		<div className='chat'>
			<ChatHeader />
														 
			<hr/>

			<div className={s.messages}>
				{ messagesElements } 
			</div>
														 
			<hr/>

			<ChatFooter />									 
		</div>

	)
}

export default Chat;