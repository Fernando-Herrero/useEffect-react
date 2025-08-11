import { useEffect, useState } from "react";
import "./CartSummary.css";

const initialCart = [
	{ id: "a1", name: "Mouse", price: 15, qty: 2 },
	{ id: "b2", name: "Keyboard", price: 35, qty: 1 },
	{ id: "c3", name: "Monitor", price: 120, qty: 1 },
	{ id: "d4", name: "USB Cable", price: 8, qty: 4 },
	{ id: "e5", name: "Webcam", price: 50, qty: 1 },
	{ id: "f6", name: "Headphones", price: 60, qty: 2 },
	{ id: "g7", name: "Laptop Stand", price: 25, qty: 1 },
	{ id: "h8", name: "External Hard Drive", price: 80, qty: 1 },
	{ id: "i9", name: "Microphone", price: 70, qty: 1 },
	{ id: "j10", name: "Desk Lamp", price: 40, qty: 1 },
];

export const CartSummary = () => {
	const [cart, setCart] = useState(initialCart);
	const [subtotal, setSubTotal] = useState(null);
	const [tax, setTax] = useState(null);
	const [total, setTotal] = useState(null);

	const handleInputQty = (newQty, id) => {
		if (newQty < 0) return;
		setCart(cart.map((item) => (item.id === id ? { ...item, qty: Number(newQty) } : item)));
	};

	useEffect(() => {
		const newSubTotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
		const newTax = newSubTotal * 0.21;
		const newTotal = newSubTotal + newTax;

		setSubTotal(newSubTotal);
		setTax(newTax);
		setTotal(newTotal);
	}, [cart]);

	return (
		<>
			<div className="cart-summary-total">
				<p>Subtotal:{subtotal}</p>
				<p>Tax:{tax}</p>
				<p>
					<strong>Total:{total}</strong>
				</p>
			</div>

			<div className="cart-summary-container">
				{cart.map(({ id, name, price, qty }) => (
					<div key={id} className="cart-summary-card">
						<h3>{name}</h3>
						<p>{price}</p>
						<label>
							<input type="number" value={qty} onChange={(e) => handleInputQty(e.target.value, id)} />
						</label>
					</div>
				))}
			</div>
		</>
	);
};
