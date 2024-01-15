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
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="15"
					viewBox="0 -960 960 960"
					width="15"
				>
					<path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
				</svg>
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
