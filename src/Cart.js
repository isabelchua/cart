import React from 'react';
import CartItem from './CartItem';

function Cart({ initItems }) {
	return (
		<div className="cart">
			<h1>cart</h1>
			<div className="cart-items">
				{initItems.map(item => (
					<CartItem {...item} />
				))}
			</div>

			{/* <li>
					Name: {item.name}, Price: {item.price}
				</li> */}
		</div>
	);
}

export default Cart;
