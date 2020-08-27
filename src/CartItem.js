import React from 'react';

function CartItem({ id, name, price, qty }) {
	return (
		<div className="CartItem">
			<div>{name}</div>
		</div>
	);
}

export default CartItem;
