import "../style.css";

export default function Todo(todo, toggleStatus, setDetails) {
	const { title, description, dueDate, priority, status, key } = todo;

	return (
		<a
			key={key}
			className="flex gap-[1rem] w-[90%] items-center text-left hover:bg-neutral-50 p-[0.5rem] border-b-[1px] border-neutral-200 hover:cursor-pointer active:bg-neutral-200"
			onClick={() => setDetails(todo)}
		>
			<input
				type="checkbox"
				className="self-center"
				checked={status}
				onChange={(e) => toggleStatus(key, e.target.checked)}
			/>
			<div className="min-w-[20rem]">
				<h3 className="self-center">{title}</h3>
				<ul className="flex text-xs gap-[0.5rem] text-neutral-500">
					<li className="overflow-hidden text-nowrap">
						{description}
					</li>
					<li> &#183;</li>
					<li className="overflow-hidden text-nowrap">{dueDate}</li>
					<li> &#183;</li>
					<li className="overflow-hidden text-nowrap">{`${priority} Priority`}</li>
				</ul>
			</div>
			<button className="ml-auto hover:bg-neutral-200 p-[0.5rem] active:bg-neutral-200">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="15"
					viewBox="0 -960 960 960"
					width="15"
				>
					<path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
				</svg>
			</button>
		</a>
	);
}
