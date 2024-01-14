import { useState } from "react";
import "../style.css";
import NewTodoForm from "./NewTodoForm";
import TodoEntry from "./TodoEntry";

export default function TodoList() {
	const [todos, setTodos] = useState([
		{ title: "Create todo app", key: crypto.randomUUID() },
	]);

	return (
		<section className="flex flex-1 gap-[1rem] flex-col p-[3rem] border border-neutral-50">
			<h2 className="text-2xl font-bold">Dashboard</h2>
			<NewTodoForm setTodos={setTodos} />
			<div>
				{todos.map((todo) => {
					return TodoEntry(todo);
				})}
			</div>
		</section>
	);
}
