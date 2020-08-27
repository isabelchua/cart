import React, { useState } from 'react';
import './Counter.css';

function TryUseState({ step = 1 }) {
	const [count, setCount] = useState(0);

	return (
		<div className="box">
			<h2>{count}</h2>
			<button onClick={() => setCount(count + step)}>+{step}</button>
		</div>
	);
}

export default TryUseState;
