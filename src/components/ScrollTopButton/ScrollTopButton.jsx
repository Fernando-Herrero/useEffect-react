import { useEffect, useState } from "react";
import "./ScrollTopButton.css";

export const ScrollTopButton = () => {
	const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			console.log("Scroll Y:", window.scrollY);
			if (window.scrollY > 450) setShowButton(true);
			else setShowButton(false);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return <>{showButton && <button className="scroll-button">Back to top</button>}</>;
};
