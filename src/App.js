import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Greeter from './Greeter';
import TryUseState from './TryUseState';
import MoodToggler from './MoodToggler';
import Cart from './Cart';

const items = [
	{ id: 1, name: 'Apples', price: 3.5, qty: 5 },
	{ id: 2, name: 'Avocados', price: 4.5, qty: 3 },
	{ id: 3, name: 'Orange', price: 2.0, qty: 1 }
];

function App() {
	return (
		<div className="App">
			<Cart initItems={items} />
			<TryUseState step={5} />
			<TryUseState />
			<MoodToggler />
			<Greeter name="Isabel" age="34" exclamation={4} />
			<Greeter name="Karen" age="44" exclamation={2} />

			<Navbar />
			<h1>hello</h1>
		</div>
	);
}

export default App;
