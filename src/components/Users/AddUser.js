import React, { useState, useRef } from 'react';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import Wrapper from '../Helper/Wrapper';
import classes from './AddUser.module.css';
import Error from '../UI/Error/Error';

const AddUser = ({ onUserAdd }) => {
	const name = useRef();
	const age = useRef();
	const [ error, setError ] = useState();

	const submitHandler = (e) => {
		e.preventDefault();
		if (name.current.value.trim().length === 0 || age.current.value.trim().length === 0) {
			setError({
				title: 'Invalid Input',
				message: 'Please enter a valid name and age (non-empty values)'
			});
			return;
		}
		if (+age.current.value < 1) {
			setError({
				title: 'Invalid Age',
				message: 'Please enter a valid  age (> 0)'
			});
			return;
		}
		onUserAdd({ username: name.current.value, age: age.current.value, id: Math.random() * 100 });
		name.current.value = '';
		age.current.value = '';
	};

	const errorHandler = () => {
		setError(null);
	};

	return (
		<Wrapper>
			{error && <Error title={error.title} message={error.message} onConfirm={errorHandler} />}
			<Card className={classes.input}>
				<form onSubmit={submitHandler}>
					<label htmlFor="username">Username</label>
					<input type="text" name="username" id="username" ref={name} />
					<label htmlFor="age">Age (Years)</label>
					<input type="number" name="age" id="age" ref={age} />
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</Wrapper>
	);
};

export default AddUser;
