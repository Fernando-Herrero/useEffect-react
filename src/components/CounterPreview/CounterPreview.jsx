import { useEffect, useState } from "react";

export const CounterPreview = () => {
	const [count, setCount] = useState(0);

	const handleClick = (n) => {
		setCount((prev) => prev + n);
	};

	useEffect(() => {
		console.log("Current count is:", count);
	}, [count]);

	return (
		<div className="counter-preview">
			<button onClick={() => handleClick(+1)}>➕</button>
			<button onClick={() => handleClick(-1)}>➖</button>
			<p>Current count: {count}</p>
		</div>
	);
};
