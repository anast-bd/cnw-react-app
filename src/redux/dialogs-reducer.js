const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
	dialogs: [
		{id: 1, name:'Kasablanka', image:'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80'},
		{id: 2, name:'Knopfen', image:'https://images.unsplash.com/photo-1555169062-013468b47731?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'},
		{id: 3, name:'Stegosaurus', image: 'https://images.unsplash.com/photo-1460999158988-6f0380f81f4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
		{id: 4, name:'Kosko', image:'https://images.unsplash.com/photo-1484557985045-edf25e08da73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80'},
		{id: 5, name:'Murrz', image: 'https://images.unsplash.com/photo-1516728778615-2d590ea1855e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'},
	],
	messages: [
		{id: 1, message:'I like Queen'},
		{id: 2, message:'The Queen or THE Queen?'},
		{id: 3, message:"THE Queen. She's just an icon of style."},
		{id: 4, message:'Yaaas, hail the Queen!'},
		{id: 5, message:'God '} 
	],
	newMessageBody: '',
}

const dialogsReducer = (state = initialState, action) => {
	
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			return {
				...state,
				newMessageBody: action.body
			};
		case SEND_MESSAGE:
			let body = state.newMessageBody;
			return {
				...state,
				newMessageBody: '',
				messages: [...state.messages, {id: 6, message: body}]
			}	
		default: 
			return state;
	}
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE}); // utility to help in action creation
export const updateNewMessageBodyCreator = (body) => 
	({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;