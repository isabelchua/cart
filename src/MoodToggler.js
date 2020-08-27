import React, { useState } from 'react';

function MoodToggler() {
	const [happy, setHappy] = useState(true);
	const toggleHappy = () => setHappy(!happy);

	return (
		<div>
			<h2 style={{ color: happy ? 'green' : 'red' }} onClick={toggleHappy}>
				{happy ? ':)' : ':('}
			</h2>
		</div>
	);
}

export default MoodToggler;
