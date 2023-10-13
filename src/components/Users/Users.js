import React from "react";
import userPhoto from '../../assets/images/Users.jpeg';
import styles from './users.module.css'
import { NavLink } from "react-router-dom";

let Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let page = [];
    for (let i = 1; i <= pageCount; i++) {
        page.push(i);
    }
    return <div>

        <div>
            {page.map((p, i) => {
                if (i < 10) {
                    return <span className={props.currentPage === p && styles.selectetPage}
                        onClick={() => {
                            console.log(props, 'props')
                            props.setCurrentPage(p)
                        }}>{p}</span>}})};
        </div> {

            props?.users?.map(u => <div key={"users".id}>

                <span>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="deletet" className={styles.userPhoto} />
                    </NavLink>
                </span>

                <span className={styles.divButtonUsers}>
                    {u.followed ?
                        <button disabled={props.followingInProgress.some(id => id === u.id)}
                            onClick={() => {
                                props.unfollow(u.id)
                                console.log(props, 'propsUser')
                            }}>
                            UNFollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)}
                            onClick={() => {
                                props.follow(u.id)
                                console.log(props, 'propsUser')
                            }
                            }>
                            Follow</button>}

                </span>
                <span className={styles.divTextUsers}>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)}
    </div>
}
export default Users;
