import React from 'react';

function Greeter({ name, age = 22, exclamation = 1 }) {
	const greet = () => {
		alert(`Hello there, ${name}!`);
	};
	return (
		<div>
			<h1>
				hi there {name} you are {age} {'!'.repeat(exclamation)}
			</h1>
			<button onClick={greet}>Click Me</button>
		</div>
	);
}

export default Greeter;
