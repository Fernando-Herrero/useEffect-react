import { useEffect, useState } from "react";

export const MousePositionTracker = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const onMouseMove = (e) => {
			const movement = { x: e.clientX, y: e.clientY };
			setPosition(movement);
			console.log(movement);
		};

		window.addEventListener("mousemove", onMouseMove);

		return () => window.removeEventListener("mousemove", onMouseMove);
	}, []);

	return null;
};

//VERSION OPTIMIZADA
// export const MousePositionTracker = () => {
// 	MAX_HISTORY = 5;
// 	const [history, setHistory] = useState([]);

// 	useEffect(() => {
// 		const onMouseMove = (e) => {
// 			const movement = { x: e.clientX, y: e.clientY };

// 			setHistory((prev) => {
// 				const updated = { ...history, movement };
// 				if (updated.length > MAX_HISTORY) {
// 					updated.shift();
// 				}
// 				return updated;
// 			});

// 			console.log(movement);
// 		};

// 		window.addEventListener("mousemove", onMouseMove);
// 		return () => {
// 			window.removeEventListener("mousemove", onMouseMove);
// 		};
// 	}, []);
// };
