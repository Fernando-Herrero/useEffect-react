import { useEffect, useState } from "react";

export const DocumentTitleUpdater = () => {
	const [input, setInput] = useState("");

	const handleInput = (e) => {
		setInput(e.target.value);
	};

	useEffect(() => {
		document.title = input;
	}, [input]);

	return (
		<label>
			Change the document title:
			<input type="text" value={input} onChange={handleInput} />
		</label>
	);
};
