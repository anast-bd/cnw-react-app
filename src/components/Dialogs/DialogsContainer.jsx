import Dialogs from './Dialogs';
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/store';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessageBody: (body) => {
			dispatch(updateNewMessageBodyCreator(body))
		},
		sendMessage: () => {
			dispatch(sendMessageCreator())
		}
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)( Dialogs )

export default DialogsContainer;