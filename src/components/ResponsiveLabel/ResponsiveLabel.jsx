import { useEffect, useState } from "react";

export const ResponsiveLabel = () => {
	const [resize, setResize] = useState("");
    
	const handleResize = () => {
		console.log("Resizing width", window.innerWidth);

		if (window.innerWidth < 768) setResize("Mobile layout");
		else setResize("Desktop layaout");
	};

	useEffect(() => {
		handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			console.log("Shutting down");
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return <h1>{resize}</h1>;
};
