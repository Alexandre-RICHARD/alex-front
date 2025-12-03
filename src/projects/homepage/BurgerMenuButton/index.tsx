import "./burgerMenuButton.scss";

import type { ChangeEvent } from "react";

type Props = {
	value: boolean;
	onChange: (newValue: boolean) => void;
};

export function BurgerMenuButton({ value, onChange }: Props) {
	const handleBurgerState = (event: ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.checked;
		onChange(newValue);
	};

	return (
		<>
			<input
				type="checkbox"
				className="menu-open"
				name="menu-open"
				id="menu-open"
				checked={value}
				onChange={handleBurgerState}
			/>
			<label
				className="menu-open-button"
				htmlFor="menu-open"
			>
				<span className="hamburger hamburger-1" />
				<span className="hamburger hamburger-2" />
				<span className="hamburger hamburger-3" />
			</label>
		</>
	);
}
