import "../style.css";
import GithubIcon from "../assets/icons/github-mark.png";

export default function Menu() {
	const buttonNames = ["All", "Today", "Week", "Starred"];

	return (
		<aside className="flex flex-col gap-[1rem] bg-neutral-50 w-[20rem] md:p-[3rem] p-[1rem] border border-neutral-50">
			<div className="flex items-center gap-[0.5rem]">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="35"
					viewBox="0 -960 960 960"
					width="35"
				>
					<path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm200-80v-240H200v240h200Zm80 0h280v-240H480v240ZM200-520h560v-240H200v240Z" />
				</svg>
				<h1 className="text-2xl font-bold">Todo</h1>
			</div>
			<nav className="flex flex-col flex-1">
				<section className="my-[1rem]">
					<h3 className="font-medium py-[0.5rem]">Tasks</h3>
					<ul className="flex flex-col gap-[0.5rem]">
						<li>
							<button className="flex items-center gap-[0.75rem] p-[0.5rem] font-medium hover:bg-neutral-100 text-left w-full active:bg-neutral-200">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24"
									viewBox="0 -960 960 960"
									width="24"
									className="opacity-75"
								>
									<path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-120H640q-30 38-71.5 59T480-240q-47 0-88.5-21T320-320H200v120Zm280-120q38 0 69-22t43-58h168v-360H200v360h168q12 36 43 58t69 22ZM200-200h560-560Z" />
								</svg>
								All
							</button>
						</li>

						<li>
							<button className="flex items-center gap-[0.75rem] p-[0.5rem] font-medium hover:bg-neutral-100 text-left w-full active:bg-neutral-200">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24"
									viewBox="0 -960 960 960"
									width="24"
									className="opacity-75"
								>
									<path d="M360-300q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" />
								</svg>
								Today
							</button>
						</li>

						<li>
							<button className="flex items-center gap-[0.75rem] p-[0.5rem] font-medium hover:bg-neutral-100 text-left w-full active:bg-neutral-200">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24"
									viewBox="0 -960 960 960"
									width="24"
									className="opacity-75"
								>
									<path d="M320-400q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm160 0q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm160 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" />
								</svg>
								Week
							</button>
						</li>

						<li>
							<button className="flex items-center gap-[0.75rem] p-[0.5rem] font-medium hover:bg-neutral-100 text-left w-full active:bg-neutral-200">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24"
									viewBox="0 -960 960 960"
									width="24"
									className="opacity-75"
								>
									<path d="m354-247 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-350Z" />
								</svg>
								Starred
							</button>
						</li>
					</ul>
				</section>
				<hr />

				<section className="my-[1rem]">
					<header className="flex justify-between items-center">
						<h3 className="font-medium py-[0.5rem]">Lists</h3>
						<button className="text-lg hover:bg-neutral-100 p-[0.5rem] active:bg-neutral-200">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="15"
								viewBox="0 -960 960 960"
								width="15"
								className="opacity-75"
							>
								<path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
							</svg>
						</button>
					</header>

					<ul>
						<li className="flex flex-col gap-[0.5rem] items-center">
							<button className="flex items-center gap-[0.75rem] p-[0.5rem] font-medium hover:bg-neutral-100 text-left w-full active:bg-neutral-200">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24"
									viewBox="0 -960 960 960"
									width="24"
									className="opacity-75"
								>
									<path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z" />
								</svg>
								Default
							</button>
						</li>
					</ul>
				</section>

				<footer className="mt-auto">
					<a
						target="#"
						href="https://github.com/Mocchu/todo-app"
						className="flex items-center  underline gap-[0.5rem] text-[0.9rem] text-neutral-400"
					>
						<img
							src={GithubIcon}
							alt="Github Logo"
							className="w-[1.2rem] opacity-50"
						/>
						Mochi &#183; Github
					</a>
				</footer>
			</nav>
		</aside>
	);
}
