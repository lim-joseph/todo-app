import "./style.css";
import TodoList from "./components/TodoList";
import Menu from "./components/Menu";
import Details from "./components/Details";
import { useState } from "react";

export default function App() {
	const [todos, setTodos] = useState([
		{
			title: "Create todo app",
			status: false,
			key: crypto.randomUUID(),
		},
	]);

	function toggleStatus(key, status) {
		setTodos((currentTodos) => {
			return currentTodos.map((todo) => {
				if (todo.key === key) {
					return { ...todo, status };
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
			/>
			<Details />
		</div>
	);
}
