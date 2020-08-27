import React from 'react';
import CartItem from './CartItem';
import { useState, useEffect } from 'react';

function Cart({ initItems }) {
	const initialState = JSON.parse(window.localStorage.getItem('items'));
	const [items, setItems] = useState(initialState || initItems);

	useEffect(() => {
		window.localStorage.setItem('items', JSON.stringify(items));
	}, [items]);

	const updateQty = (id, newQty) => {
		const newItems = items.map(item => {
			if (item.id === id) {
				return { ...item, qty: newQty };
			}
			return item;
		});
		setItems(newItems);
	};

	const grandTotal = items
		.reduce((total, item) => total + item.qty * item.price, 0)
		.toFixed(2);

	return (
		<div className="cart">
			<h1>cart</h1>
			<div className="cart-items">
				{items.map(item => (
					<CartItem key={item.id} updateQty={updateQty} {...item} />
				))}
			</div>
			<h2>Grand Total: $ {grandTotal}</h2>
			{/* <li>
					Name: {item.name}, Price: {item.price}
				</li> */}
		</div>
	);
}

export default Cart;
