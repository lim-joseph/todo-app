import "../style.css";

export default function TodoEntry({ title, key }) {
	return (
		<button
			key={key}
			className="flex gap-[1rem] w-[90%] text-left hover:bg-neutral-50 p-[0.5rem] border-b-[1px] border-neutral-200"
		>
			<input type="checkbox" className="self-center" />
			<div>
				<h3 className="self-center">{title}</h3>
			</div>
		</button>
	);
}
