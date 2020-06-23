import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/default-user-img.png';

let Users = (props) => {
	
	if (props.users.length === 0) {
		
		axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
			props.setUsers(response.data.items);
		});


		// props.setUsers ([ 
		// 	{id: 1, followed: true, name:'Kasablanka', image:'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80', location: {city: 'New York', country: 'USA'}},
		// 	{id: 2, followed: true, name:'Knopfen', image:'https://images.unsplash.com/photo-1555169062-013468b47731?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80', location: {city: 'Wellington', country: 'NZ'}},
		// 	{id: 3, followed: true, name:'Stegosaurus', image: 'https://images.unsplash.com/photo-1460999158988-6f0380f81f4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', location: {city: 'Istanbul', country: 'TR'}},
		// 	{id: 4, followed: false, name:'Kosko', image:'https://images.unsplash.com/photo-1484557985045-edf25e08da73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80', location: {city: 'De Falom', country: 'NL'}},
		// 	{id: 5, followed: true, name:'Murrz', image: 'https://images.unsplash.com/photo-1516728778615-2d590ea1855e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80', location: {city: 'Mbombela', country: 'ZA'}},
		// ])
	}

	
	return <div className={s.usersPage}> 
		{
			props.users.map( u => <div className={s.userCard} key={u.id}>
				<div className={s.userCardImage}>
					<img src={u.photos.small != null ? u.photos.small : userPhoto}></img>
				</div>
				<div className={s.userCardInfo}>
					<div className={s.userName}>{u.name}</div>
					<div className={s.userLocation}>{'u.location.city'}, {'u.location.country'}</div>
				</div>
					{u.followed 
						? <button onClick={ () => {props.unfollow(u.id)} }>unfollow</button>
						: <button onClick={ () => {props.follow(u.id)} }>follow</button>
					}
			</div> )
		}
	</div>
	
}

export default Users;