import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import NewPost from './NewPost';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
	return {
		newPostText: state.profilePage.newPostText
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateNewPostText: (text) => {
			let action = updateNewPostTextActionCreator(text);
			dispatch(action)
		},
		addPost: () => {
			dispatch(addPostActionCreator())
		}
	}
}

const NewPostContainer = connect (mapStateToProps, mapDispatchToProps)( NewPost );

export default NewPostContainer;