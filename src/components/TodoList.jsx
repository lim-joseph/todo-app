import "../style.css";
import TodoEntry from "./TodoEntry";
import { useRef } from "react";
import { useState } from "react";

export default function TodoList() {
	const [todos, setTodos] = useState([]);
	const titleRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		const title = titleRef.current.value;
		if (title === "") return;

		setTodos((currentTodos) => {
			return [
				...currentTodos,
				{ title: title, key: crypto.randomUUID() },
			];
		});

		titleRef.current.value = "";
	};

	return (
		<section className="flex flex-1 gap-[1rem] flex-col p-[3rem] border border-neutral-50">
			<h2 className="text-2xl font-bold">Dashboard</h2>

			<form
				onSubmit={(e) => handleSubmit(e)}
				className="flex gap-[0.5rem] mt-[1rem]"
			>
				<button
					type="submit"
					className="text-lg hover:bg-neutral-100 p-[0.1rem] px-[0.5rem]"
				>
					+
				</button>
				<input
					type="text"
					placeholder="Add New Task"
					className="p-[0.25rem] border-b-[1px] border-neutral-300 font-semibold"
					ref={titleRef}
				></input>
			</form>

			<div>
				{todos.map((todo) => {
					return TodoEntry(todo);
				})}
			</div>
		</section>
	);
}
