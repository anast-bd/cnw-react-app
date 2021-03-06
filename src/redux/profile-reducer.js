const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
	posts: [
		{id: 1, message: 'Ribbit! Ribbit ribbit.', likesCount: '800'},
		{id: 2, message: 'Ribbit ribbit, ribbit. Ribbit?.', likesCount: '1250'},
		{id: 3, message: 'Ribbit ribbit rib-ribbit ribbit!', likesCount: '958'}
		],
	newPostText: '',
}

const profileReducer = (state = initialState, action) => {
	
	switch (action.type) {
		case ADD_POST:
			let newPost ={
				id: 5,
				message: state.newPostText,
				likesCount: 0
			}
			state.posts.unshift(newPost);
			state.newPostText = '';
			return state;
		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.newText;	
			return state;
		default:
			return state;
	}
}

export const addPostActionCreator = () => ({type: ADD_POST}); // utility to help in action creation
export const updateNewPostTextActionCreator = (text) => 
	({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;