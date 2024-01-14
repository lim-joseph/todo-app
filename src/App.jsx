import "./style.css";
import TodoList from "./components/TodoList";
import Menu from "./components/Menu";
import Details from "./components/Details";
import { useState } from "react";

export default function App() {
	const defaultTodo = {
		title: "Create todo app",
		status: true,
		key: crypto.randomUUID(),
	};
	const [todos, setTodos] = useState([defaultTodo]);
	const [details, setDetails] = useState(defaultTodo);

	function toggleStatus(key, status) {
		setTodos((currentTodos) => {
			return currentTodos.map((todo) => {
				if (todo.key === key) {
					// Scuffed fix to mirror toggled checkbox
					showDetails({ ...todo, status });

					return { ...todo, status };
				}
				return todo;
			});
		});
	}

	function showDetails(todo) {
		setDetails(todo);
	}

	return (
		<div className="h-full flex">
			<Menu />
			<TodoList
				todos={todos}
				setTodos={setTodos}
				toggleStatus={toggleStatus}
				showDetails={showDetails}
			/>
			<Details todo={details} />
		</div>
	);
}
