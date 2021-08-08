import React, { useState } from 'react';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import classes from './AddUser.module.css';
import Error from '../UI/Error/Error';

const AddUser = ({ onUserAdd }) => {
	const [ userData, setUserData ] = useState({
		username: '',
		age: ''
	});

	const [ error, setError ] = useState();

	const enteredUsername = (e) => {
		setUserData((prevState) => ({
			...prevState,
			username: e.target.value
		}));
	};
	const enteredAge = (e) => {
		setUserData((prevState) => ({
			...prevState,
			age: e.target.value
		}));
	};

	const submitHandler = (e) => {
		e.preventDefault();
		if (userData.username.trim().length === 0 || userData.age.trim().length === 0) {
			setError({
				title: 'Invalid Input',
				message: 'Please enter a valid name and age (non-empty values)'
			});
			return;
		}
		if (+userData.age < 1) {
			setError({
				title: 'Invalid Age',
				message: 'Please enter a valid  age (> 0)'
			});
			return;
		}
		onUserAdd({ username: userData.username, age: userData.age, id: Math.random() * 100 });
		setUserData({
			username: '',
			age: ''
		});
	};

	const errorHandler = () => {
		setError(null);
	};

	return (
		<div>
			{error && <Error title={error.title} message={error.message} onConfirm={errorHandler} />}
			<Card className={classes.input}>
				<form onSubmit={submitHandler}>
					<label htmlFor="username">Username</label>
					<input
						type="text"
						name="username"
						id="username"
						value={userData.username}
						onChange={enteredUsername}
					/>
					<label htmlFor="age">Age (Years)</label>
					<input type="number" name="age" id="age" value={userData.age} onChange={enteredAge} />
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</div>
	);
};

export default AddUser;
