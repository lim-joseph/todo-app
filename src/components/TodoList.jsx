import "../style.css";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

export default function TodoList({
	todos,
	setTodos,
	toggleStatus,
	setDetails,
}) {
	return (
		<section className="flex flex-1 gap-[1rem] flex-col md:p-[3rem] p-[1rem] border border-neutral-50">
			<h2 className="text-2xl font-bold">Dashboard</h2>
			<NewTodoForm setTodos={setTodos} />
			<div>
				{todos.map((todo) => {
					return Todo(todo, toggleStatus, setDetails);
				})}
			</div>
		</section>
	);
}
