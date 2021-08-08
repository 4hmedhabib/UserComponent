import React, { useState } from 'react';
import Wrapper from './components/Helper/Wrapper';
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
		<Wrapper>
			<AddUser onUserAdd={addUserHandler} />
			<UserList users={userList} />
		</Wrapper>
	);
}

export default App;
