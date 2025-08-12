import { useEffect, useRef, useState } from "react";

const saveLocalStorage = (key, value) => {
	try {
		localStorage.setItem(key, JSON.stringify(value));
	} catch (error) {
		console.error("Error saving at localStorage", error);
	}
};

const getFromLocalStorage = (key) => {
	try {
		const item = localStorage.getItem(key);
		return item ? JSON.parse(item) : null;
	} catch (error) {
		console.error("Error getting localStorage", error);
		return "";
	}
};

export const LocalStorageSync = () => {
	const initialValue = getFromLocalStorage("input");
	const [input, setInput] = useState(initialValue ?? "");
	const lastSavedRef = useRef(initialValue);

	const onHandleInput = (e) => {
		setInput(e.target.value);
	};

	useEffect(() => {
		if (input === lastSavedRef.current) return;
		saveLocalStorage("input", input);
		lastSavedRef.current = input;
	}, [input]);

	return (
		<label>
			Write here your thoughts:
			<input type="text" value={input} onChange={onHandleInput} />
		</label>
	);
};
