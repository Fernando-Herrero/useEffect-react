import { useEffect, useState } from "react";

export const AutoRefreshingClock = () => {
	const [time, setTime] = useState("");
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const actualTime = setInterval(() => {
			const hour = new Date();

			setTime(hour.toLocaleTimeString());

			setSeconds((prev) => {
				const second = prev + 1;
				console.log("Time is running", second);
				return second;
			});
		}, 1000);

		return () => {
			clearInterval(actualTime);
		};
	}, []);

	return (
		<div className="auto-refreshing-clock">
			<h2>Time</h2>
			<span>{time}</span>
		</div>
	);
};
