import "./style.css";
import TodoList from "./components/TodoList";
import Menu from "./components/Menu";
import Details from "./components/Details";
import { useState } from "react";

export default function App() {
	const defaultTodo = {
		title: "Create a todo app",
		description: "Struggle to learn react simultaneously",
		dueDate: "01/01",
		priority: "High",
		status: true,
		key: crypto.randomUUID(),
	};
	const [todos, setTodos] = useState([defaultTodo]);
	const [details, setDetails] = useState(defaultTodo);

	function toggleStatus(key, status) {
		setTodos((currentTodos) => {
			return currentTodos.map((todo) => {
				if (todo.key === key) {
					// Update details pane and library
					const newTodo = { ...todo, status };
					setDetails(newTodo);
					return newTodo;
				}
				return todo;
			});
		});
	}

	return (
		<div className="h-full flex">
			<Menu />
			<TodoList
				todos={todos}
				setTodos={setTodos}
				toggleStatus={toggleStatus}
				setDetails={setDetails}
			/>
			<Details todos={todos} todo={details} setTodos={setTodos} />
		</div>
	);
}
