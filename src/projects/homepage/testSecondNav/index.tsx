import "./styles.scss";

import { useState } from "react";

import { BurgerMenuButton } from "../BurgerMenuButton";

export type NavItem = {
	id: string;
	label: string;
	href: string;
};

export function GooeyMenu() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<>
			<nav className="menu">
				<BurgerMenuButton
					value={isOpen}
					onChange={setIsOpen}
				/>

				<a
					href="#"
					className="menu-item"
				>
					<i className="fa fa-bar-chart" />
				</a>
				<a
					href="#"
					className="menu-item"
				>
					<i className="fa fa-plus" />
				</a>
				<a
					href="#"
					className="menu-item"
				>
					<i className="fa fa-heart" />
				</a>
				<a
					href="#"
					className="menu-item"
				>
					<i className="fa fa-envelope" />
				</a>
			</nav>

			{/* Filtres SVG */}
		</>
	);
}
