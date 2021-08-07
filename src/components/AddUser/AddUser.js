import React from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button/Button';
import classes from './AddUser.module.css';

const AddUser = () => {
	return (
		<Card className={classes.input}>
			<form>
				<label htmlFor="username">Username</label>
				<input type="text" name="username" id="username" placeholder="Username..." />
				<label htmlFor="age">Age (Years)</label>
				<input type="text" name="age" id="age" placeholder="Age (Year's)..." />
				<Button type="submit">Add User</Button>
			</form>
		</Card>
	);
};

export default AddUser;
