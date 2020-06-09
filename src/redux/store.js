const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
	_state: {
		profilePage: {
			posts: [
			{id: 1, message: 'Ribbit! Ribbit ribbit.', likesCount: '800'},
			{id: 2, message: 'Ribbit ribbit, ribbit. Ribbit?.', likesCount: '1250'},
			{id: 3, message: 'Ribbit ribbit rib-ribbit ribbit!', likesCount: '958'}
			],
			newPostText: '',
		},
		dialogsPage: {
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
	},
	_callSubscriber() {
		console.log('State changed');
	},
	
	// state changing methods
	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},
	
	_addPost() {
		let newPost ={
			id: 5,
			message: this._state.profilePage.newPostText,
			likesCount: 0
		};
		this._state.profilePage.posts.unshift(newPost);
		this._state.profilePage.newPostText = '';
		this._callSubscriber(this._state); // observer pattern realization
	},
	_updateNewPostText(newText) {
		this._state.profilePage.newPostText = newText;
		this._callSubscriber(this._state);
	},
	_updateNewMessageBody(newMessageBody) {
		this._state.dialogsPage.newMessageBody = newMessageBody;
		this._callSubscriber(this._state);
	},
	_sendMessage() {
		let body = this._state.dialogsPage.newMessageBody;
		this._state.dialogsPage.newMessageBody = '';
		this._state.dialogsPage.messages.push({id: 6, message: body});
		this._callSubscriber(this._state);
	},
	dispatch(action) { // {type: ADD_POST}
		if (action.type === ADD_POST) {
			this._addPost();
		} else
		if (action.type === UPDATE_NEW_POST_TEXT) {
			this._updateNewPostText(action.newText);
		} else
		if (action.type === UPDATE_NEW_MESSAGE_BODY) {
			this._updateNewMessageBody(action.body);
		} else
		if (action.type === SEND_MESSAGE) {
			this._sendMessage();
		}
	}

} 

export const addPostActionCreator = () => ({type: ADD_POST}); // utility to help in action creation
export const updateNewPostTextActionCreator = (text) => 
	({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const sendMessageCreator = () => ({type: SEND_MESSAGE}); // utility to help in action creation
export const updateNewMessageBodyCreator = (body) => 
	({ type: UPDATE_NEW_MESSAGE_BODY, body: body });


export default store;

window.store = store; // so we can get it globally
