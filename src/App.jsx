import "./style.css";
import TodoList from "./components/TodoList";
import Menu from "./components/Menu";
import Details from "./components/Details";

export default function App() {
	return (
		<div className="h-full flex">
			<Menu />
			<TodoList />
			<Details />
		</div>
	);
}
