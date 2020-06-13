import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './DialogItem.module.css'

const DialogItem = (props) => {
	let path = '/dialogs/' + props.id;
	return (
		<div className={s.dialog + ' ' + s.active}>
			<NavLink to={path}>
				<img className={s.dialogImg} src={props.image} alt={props.name}> </img>
				<div className={s.dialogName}> {props.name} </div>
			</NavLink>
		</div>	
	)
}

export default DialogItem;
