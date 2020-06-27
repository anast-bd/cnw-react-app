import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/default-user-img.png';


class Users extends React.Component {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
		.then (response => {
			this.props.setUsers(response.data.items);
			this.props.setTotalUsersCount(response.data.totalCount);
		})
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage (pageNumber);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
		.then (response => {
			this.props.setUsers(response.data.items);
		})
	}

	render() {

		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

		let pages = [];
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i);
		}

		return <div className={s.usersPage}>
			<div>
				{pages.map (p => {
					return <span className= {this.props.currentPage === p && s.selectedPage}
					onClick = {(e) => { this.onPageChanged(p) }}>{p} </span>
				})}
			</div>

			{
				this.props.users.map( u => <div className={s.userCard} key={u.id}>
					<div className={s.userCardImage}>
						<img src={u.photos.small != null ? u.photos.small : userPhoto} alt={u.name}></img>
					</div>
					<div className={s.userCardInfo}>
						<div className={s.userName}>{u.name}</div>
						<div className={s.userLocation}>{'u.location.city'}, {'u.location.country'}</div>
					</div>
						{u.followed 
							? <button onClick={ () => {this.props.unfollow(u.id)} }>unfollow</button>
							: <button onClick={ () => {this.props.follow(u.id)} }>follow</button>
						}
				</div> )
			}
		</div>
	}
}

export default Users;