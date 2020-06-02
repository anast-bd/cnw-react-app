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
			]
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
		this._callSubscriber(this._state);
	},
	_updateNewPostText(newText) {
		this._state.profilePage.newPostText = newText;
		this._callSubscriber(this._state);
	},
	dispatch(action) { // {type: 'ADD-POST'}
		if (action.type === 'ADD-POST') {
			this._addPost();
		}
		if (action.type === 'UPDATE-NEW-POST-TEXT') {
			this._updateNewPostText(action.newText);
		}
	}

} 

export default store;

window.store = store; // so we can get it globally
