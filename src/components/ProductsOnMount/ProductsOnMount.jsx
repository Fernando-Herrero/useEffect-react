import { useEffect, useState } from "react";
import "./ProductsOnMount.css";
import { LocalProductSearch } from "../LocalProductSearch/LocalProductSearch";

export const ProductsOnMount = () => {
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [showProducts, setShowProducts] = useState(false);

	const handleShowProducts = () => {
		setShowProducts((prev) => !prev);
	};

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				setLoading(true);
				setError(null);

				const response = await fetch("https://fakestoreapi.com/products");
				if (!response.ok) throw new Error(`Request failed with status: ${response.status}`);

				const data = await response.json();
				setProducts(data);
				setFilteredProducts(data);
			} catch (error) {
				setError(error.message || "Unknown error");
				console.error("Error fetching products:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchProducts();
	}, []);

	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p style={{ color: "red" }}>Error: {error}</p>;
	}

	return (
		<>
			<LocalProductSearch products={products} onFilter={setFilteredProducts} />
			<button className="show-products" onClick={handleShowProducts}>{showProducts ? "Hide products" : "Show Products"}</button>
			{showProducts && (
				<div className="products-on-mount">
					{filteredProducts.map(({ id, category, description, image, price, rating, title }) => (
						<div key={id} className="card-product">
							<img src={image} alt={title} />
							<div className="card-content">
								<h3>
									{title}({category})
								</h3>
								<p>{description}</p>
								<span>{price}$</span>
								<span>{rating.rate}⭐️</span>
							</div>
						</div>
					))}
				</div>
			)}
		</>
	);
};
