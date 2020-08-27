import React from 'react';

function CartItem({ id, name, price, qty, updateQty }) {
	const addOne = () => {
		updateQty(id, qty + 1);
	};
	const minusOne = () => {
		updateQty(id, qty - 1);
	};

	return (
		<div className="CartItem">
			<div>{name}</div>
			<div>${price}</div>
			<div className="qty">
				<button onClick={minusOne} disabled={qty <= 1 ? true : false}>
					-
				</button>
				<div>{qty}</div>
				<button onClick={addOne}>+</button>
			</div>
			<div>Total: ${qty * price}</div>
		</div>
	);
}

export default CartItem;
