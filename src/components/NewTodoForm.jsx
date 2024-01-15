import "../style.css";
import { useRef } from "react";

export default function NewTodoForm({ setTodos }) {
	const titleRef = useRef();

	function handleSubmit(e) {
		e.preventDefault();
		const title = titleRef.current.value;
		titleRef.current.value = "";
		if (title === "") return;

		setTodos((currentTodos) => {
			return [
				...currentTodos,
				{
					title: title,
					description: "No description",
					dueDate: "No Due Date",
					priority: "Low",
					status: false,
					key: crypto.randomUUID(),
				},
			];
		});
	}

	return (
		<form
			onSubmit={(e) => handleSubmit(e)}
			className="flex gap-[0.5rem] mt-[1rem]"
		>
			<button
				type="submit"
				className="text-lg hover:bg-neutral-100 p-[0.1rem] px-[0.5rem] active:bg-neutral-200"
			>
				+
			</button>
			<input
				type="text"
				placeholder="Add New Task"
				className="p-[0.25rem] border-b-[1px] border-neutral-300 font-semibold outline-none focus:border-b-neutral-500 "
				ref={titleRef}
			></input>
		</form>
	);
}
