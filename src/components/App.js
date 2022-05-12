import { useState } from 'react';
export function App() {
	const [input, setInput] = useState('');
	const [user, setUser] = useState(null);

	const APIURL = 'https://api.github.com/users/';

	const getUser = e => {
		if (e.key === 'Enter') {
			fetch(APIURL + input)
				.then(response => response.json())
				.then(result => {
					setUser(result);
					setInput('');
				});
		}
	};

	return (
		<>
			<header>
				<input
					type='text'
					placeholder='Search a Github User'
					value={input}
					onChange={e => setInput(e.target.value)}
					onKeyPress={getUser}
				/>
			</header>
			<main>{user ? user.id : 'no results'}</main>
		</>
	);
}
