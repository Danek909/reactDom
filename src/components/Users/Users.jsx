import React from "react";
import styles from './users.module.css'
import axios from 'axios';
import userPhoto from '../../asets/images/Users.jpeg'

class Users extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`

        ).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let page = [];
        for (let i = 1; i <= pageCount; i++) {
            page.push(i);
        }

        console.log(this.props)
        return (
            <div>
                <div>
                    {page.map(p => {
                        return <span className={this.props.currentPage === p && styles.selectetPage}
                            onClick={() => { this.props.setCurrentPage(p) }}>{p}</span>
                    })};

                </div> {
                    this?.props?.users?.map(u => <div key={u.id}>
                        <span>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                        </span>
                        <span className={styles.divButtonUsers}>
                            {u.followed ?
                                <button onClick={() => { this.props.unfollow(u.id) }}>UNFollow</button>
                                : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}

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
        )
    }
}

export default Users;