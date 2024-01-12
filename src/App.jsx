import "./style.css";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import TodoItem from "./components/TodoItem";

export default function App() {
	console.log("hi");
	return (
		<div className="flex bg-red-300">
			<Sidebar />
			<Dashboard />
			<TodoItem />
		</div>
	);
}
