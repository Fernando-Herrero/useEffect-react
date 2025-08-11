import { useEffect, useState } from "react";
import "./LocalProductSearch.css";

export const LocalProductSearch = ({ products, onFilter }) => {
	const [input, setInput] = useState("");
	const [error, setError] = useState(null);

	const handleInput = (e) => {
		setError(null);

		const inputName = e.target.value.toLowerCase();
		setInput(inputName);
	};

	useEffect(() => {
		if (input.length > 0 && input.length < 3) {
			setError("Please write at least 3 characters");
			onFilter(products);
			return;
		}

		const filtered = products.filter((product) => product.title.toLowerCase().startsWith(input.trim()));
		if (filtered.length === 0) setError("Item not found");
		onFilter(filtered);
	}, [input, products, onFilter]);

	return (
		<label className="local-product-search">
			Search your item:
			<input type="search" autoComplete="off" value={input} onChange={handleInput} />
			{error && <p style={{ color: "red" }}>{error}</p>}
		</label>
	);
};
