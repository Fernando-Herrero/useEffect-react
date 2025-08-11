import { useEffect, useState } from "react";

export const WindowsFocusStatus = () => {
	const [isActive, setIsActive] = useState(true);

	useEffect(() => {
		const onFocus = () => setIsActive(true);
		const onBlur = () => setIsActive(false);

		window.addEventListener("focus", onFocus);
		window.addEventListener("blur", onBlur);

		return () => {
			window.removeEventListener("focus", onFocus);
			window.removeEventListener("blur", onBlur);
		};
	}, [isActive]);

	return <>{isActive && <h1>{isActive ? "App is Active" : "App is Inactive"}</h1>} </>;
};
