import "../style.css";

export default function Details({ todo }) {
	const { title, description, dueDate, priority, status, key } = todo;

	return (
		<section className="flex flex-col w-[30rem] p-[3rem] border border-neutral-50">
			<h2 className="text-2xl font-bold">Details</h2>
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
					{description}
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
		</section>
	);
}
