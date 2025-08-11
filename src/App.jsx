import "./App.css";
import { CounterPreview } from "./components/CounterPreview/CounterPreview";
import { WelcomeMessage } from "./components/WelcomeMessage/WelcomeMessage";

export const App = () => {
	return (
		<>
			<WelcomeMessage />
			<CounterPreview />
		</>
	);
};
