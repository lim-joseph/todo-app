import "../style.css";

export default function Todo({ title, status, key }, toggleStatus) {
	return (
		<a
			key={key}
			className="flex gap-[1rem] w-[90%] items-center text-left hover:bg-neutral-50 p-[0.5rem] border-b-[1px] border-neutral-200 hover:cursor-pointer active:bg-neutral-200"
		>
			<input
				type="checkbox"
				className="self-center"
				checked={status}
				onChange={(e) => toggleStatus(key, e.target.checked)}
			/>
			<div>
				<h3 className="self-center">{title}</h3>
			</div>
			<button className="ml-auto text-lg hover:bg-neutral-200 p-[0.1rem] px-[0.5rem] active:bg-neutral-200">
				x
			</button>
		</a>
	);
}
