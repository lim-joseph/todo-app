import "../style.css";

export default function Details({ title }) {
	return (
		<section className="w-[30rem] p-[3rem] border border-neutral-50">
			<h2 className="text-2xl font-bold">Details</h2>
			<h3>{title}</h3>
			{/* <input type="checkbox" checked={status} /> */}
		</section>
	);
}
