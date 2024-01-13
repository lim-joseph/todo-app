import "../style.css";

export default function Menu() {
	const buttonNames = ["All", "Today", "Week", "Starred"];

	return (
		<aside className="flex flex-col gap-[1rem] bg-neutral-50 w-[20rem] p-[2rem] border border-neutral-50">
			<h2 className="text-xl font-bold">Menu</h2>
			<nav className="flex flex-col flex-1">
				<hr />

				<section className="my-[1rem]">
					<h3 className="font-medium py-[0.5rem]">Tasks</h3>
					<ul className="flex flex-col gap-[0.5rem]">
						{buttonNames.map((name, index) => (
							<li key={index}>
								<button className="p-[0.5rem] font-medium hover:bg-neutral-100 text-left">
									{name}
								</button>
							</li>
						))}
					</ul>
				</section>
				<hr />

				<section className="my-[1rem]">
					<header className="flex justify-between items-center">
						<h3 className="font-medium py-[0.5rem]">Lists</h3>
						<button className="hover:bg-neutral-100 p-[0.1rem] px-[0.5rem]">
							+
						</button>
					</header>
					<ul className="flex flex-col gap-[0.5rem]">
						<button>
							<li className="p-[0.5rem] font-medium hover:bg-neutral-100 text-left">
								Default
							</li>
						</button>
					</ul>
				</section>

				<section className="mt-auto text-left">
					<a
						target="#"
						href="https://github.com/Mocchu/todo-app"
						className="underline text-[0.9rem] text-neutral-400"
					>
						https://github.com/Mocchu/todo-app
					</a>
				</section>
			</nav>
		</aside>
	);
}
