import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/default-user-img.png';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    // debugger;

    return <div className={s.usersPage}>
				<div>
					{pages.map (p => {
						return (
                            <span className = {props.currentPage === p && s.selectedPage}
                                    onClick = {(p) => {
                                        props.onPageChanged(p)
                                    }}> {p} </span> 
                        )
                    })}
				</div>

            {
                props.users.map( u => <div className={s.userCard} key={u.id}>
                    <div className={s.userCardImage}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt={u.name}></img>
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