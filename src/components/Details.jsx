import "../style.css";

export default function Details({ todo }) {
	const { title, status } = todo;

	return (
		<section className="flex flex-col gap-[1rem] w-[30rem] p-[3rem] border border-neutral-50">
			<h2 className="text-2xl font-bold">Details</h2>
			<h3 className="mt-[1rem]">{`Name: ${title}`}</h3>
			<div className="flex gap-[1rem]">
				<label htmlFor="status">Status:</label>
				<input
					id="status"
					type="checkbox"
					checked={status}
					className="self-center"
				/>
			</div>
		</section>
	);
}
