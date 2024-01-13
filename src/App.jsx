import "./style.css";
import Dashboard from "./components/Dashboard";
import Menu from "./components/Menu";
import Details from "./components/Details";

export default function App() {
	return (
		<div className="h-full flex">
			<Menu />
			<Dashboard />
			<Details />
		</div>
	);
}
