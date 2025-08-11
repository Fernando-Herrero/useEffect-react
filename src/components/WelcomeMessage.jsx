import { useEffect, useState } from "react";

export const WelcomeMessage = () => {
	const [time, setTime] = useState("");

	useEffect(() => {
		console.log("Welcome to Hell");

		const actualTime = () => {
			const timeNow = new Date();

			setTime(timeNow.toLocaleTimeString());
		};

		actualTime();
	}, []);

	return (
		<div className="welcome-message-container">
			<h2>Welcome!, {time}</h2>
		</div>
	);
};
