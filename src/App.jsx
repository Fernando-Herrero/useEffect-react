import { useState } from "react";
import "./App.css";
import { AutoRefreshingClock } from "./components/AutoRefreshingClock/AutoRefreshingClock";
import { CounterPreview } from "./components/CounterPreview/CounterPreview";
import { WelcomeMessage } from "./components/WelcomeMessage/WelcomeMessage";
import { ResponsiveLabel } from "./components/ResponsiveLabel/ResponsiveLabel";
import { ProductsOnMount } from "./components/ProductsOnMount/ProductsOnMount";
import { CartSummary } from "./components/CartSummary/CartSummary";
import { WindowsFocusStatus } from "./components/WindowsFocusStatus/WindowsFocusStatus";
import { ScrollTopButton } from "./components/ScrollTopButton/ScrollTopButton";

export const App = () => {
	const [showClock, setShowCLock] = useState(true);
	return (
		<div className="app-container">
			<WelcomeMessage />
			<CounterPreview />
			<div className="auto-refreshing-clock-container">
				{showClock && <AutoRefreshingClock />}
				<button
					onClick={() => {
						setShowCLock((prev) => !prev);
					}}
				>
					{showClock ? "Hide Clock" : "Show Clock"}
				</button>
			</div>
			<ResponsiveLabel />
			<ProductsOnMount />
			<CartSummary />
			<WindowsFocusStatus />
			<ScrollTopButton />
		</div>
	);
};
