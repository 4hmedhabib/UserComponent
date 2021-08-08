import React from 'react';
import Card from '../UI/Card/Card';
import classes from './UserList.module.css';

const UserList = ({ users }) => {
	return (
		<Card className={classes.users}>
			<ul>{users.map((user) => <li key={user.id}>{`${user.name} (${user.age} Year's Old)`}</li>)}</ul>
		</Card>
	);
};

export default UserList;
