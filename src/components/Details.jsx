import "../style.css";

export default function Details({ todos, todo, setTodos }) {
	const { title, description, dueDate, priority, status, key } = todo;

	function handleTodoEdit(description) {
		setTodos(() => {
			return todos.map((test) => {
				if (test.key === key) {
					return { ...test, description };
				}
				return test;
			});
		});
	}

	console.log(description);

	// MAKE THE DESCRIPTION DEFAULT VALUE UPDATE WHEN SELECTING A NEW TODO

	return (
		<section className="lg:flex flex-col w-[30rem] sm:hidden md:p-[3rem] p-[1rem] border border-neutral-50">
			<h2 className="text-2xl font-bold">Details</h2>
			<form>
				<ul className="mt-[2rem]">
					<li className="py-[0.75rem] border-b-[1px] border-neutral-200">
						<p className="font-semibold text-sm text-neutral-500">
							Title
						</p>
						<h3>{title}</h3>
					</li>
					<li className="py-[0.75rem] border-b-[1px] border-neutral-200">
						<p className="font-semibold text-sm text-neutral-500">
							Description
						</p>
						<input
							type="text"
							defaultValue={description}
							onChange={(e) => handleTodoEdit(e.target.value)}
							className="w-full"
						/>
					</li>
					<li className="py-[0.75rem] border-b-[1px] border-neutral-200">
						<p className="font-semibold text-sm text-neutral-500">
							Due Date
						</p>
						{dueDate}
					</li>
					<li className="py-[0.75rem] border-b-[1px] border-neutral-200">
						<p className="font-semibold text-sm text-neutral-500">
							Priority
						</p>
						{priority}
					</li>
					<li className="flex gap-[1rem] py-[0.5rem] border-b-[1px] border-neutral-200">
						<label
							htmlFor="status"
							className="font-semibold text-sm text-neutral-500"
						>
							Status
						</label>
						<input
							id="status"
							type="checkbox"
							checked={status}
							className="self-center"
							readOnly
						/>
					</li>
				</ul>
			</form>
		</section>
	);
}
