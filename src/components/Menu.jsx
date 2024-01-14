import "../style.css";

export default function Menu() {
	const buttonNames = ["All", "Today", "Week", "Starred"];

	return (
		<aside className="flex flex-col gap-[1rem] bg-neutral-50 w-[20rem] p-[3rem] border border-neutral-50">
			<h1 className="text-2xl font-bold">Todo</h1>
			<nav className="flex flex-col flex-1">
				<section className="my-[1rem]">
					<h3 className="font-medium py-[0.5rem]">Tasks</h3>
					<ul className="flex flex-col gap-[0.5rem]">
						{buttonNames.map((name, index) => {
							return (
								<li key={index}>
									<button className="p-[0.5rem] font-medium hover:bg-neutral-100 text-left w-full active:bg-neutral-200">
										{name}
									</button>
								</li>
							);
						})}
					</ul>
				</section>
				<hr />

				<section className="my-[1rem]">
					<header className="flex justify-between items-center">
						<h3 className="font-medium py-[0.5rem]">Lists</h3>
						<button className="text-lg hover:bg-neutral-100 p-[0.1rem] px-[0.5rem] active:bg-neutral-200">
							+
						</button>
					</header>
					<ul className="flex flex-col gap-[0.5rem]">
						<li>
							<button className="p-[0.5rem] font-medium hover:bg-neutral-100 text-left w-full active:bg-neutral-200">
								Default
							</button>
						</li>
					</ul>
				</section>

				<footer className="flex gap-[0.5rem] mt-auto text-left">
					<a
						target="#"
						href="https://github.com/Mocchu/todo-app"
						className="underline text-[0.9rem] text-neutral-400"
					>
						Mochi - Github
					</a>
				</footer>
			</nav>
		</aside>
	);
}
