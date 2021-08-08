import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
	const [ userList, setUserList ] = useState([]);

	const addUserHandler = (props) => {
		setUserList((prevState) => {
			return [ ...prevState, { name: props.username, age: props.age, id: props.id } ];
		});
	};
	return (
		<div>
			<AddUser onUserAdd={addUserHandler} />
			<UserList users={userList} />
		</div>
	);
}

export default App;
