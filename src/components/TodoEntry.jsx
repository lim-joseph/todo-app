import "../style.css";

export default function TodoEntry({ title, description }) {
	return (
		<button className="text-left hover:bg-neutral-50 p-[0.5rem] border-b-[1px] border-neutral-200">
			<h3>{title}</h3>
		</button>
	);
}
