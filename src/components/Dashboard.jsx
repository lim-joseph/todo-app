import "../style.css";
import TodoEntry from "./TodoEntry";

export default function Dashboard() {
	const test = {
		title: "test title",
		description: "test description",
	};
	return (
		<section className="flex flex-1 gap-[1rem] flex-col p-[2rem] border border-neutral-50">
			<h2 className="text-xl font-bold">Dashboard</h2>
			<form action="" className="flex gap-[1rem]">
				<input
					type="text"
					placeholder="Build a todo-list app"
					className="p-[0.25rem] border-b-[1px] border-neutral-300"
				></input>
				<button
					type="submit"
					className="p-[0.25rem] border border-neutral-300"
				>
					+
				</button>
			</form>
			<TodoEntry title={test.title} description={test.description} />
			<TodoEntry title={test.title} description={test.description} />
		</section>
	);
}
