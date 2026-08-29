import { Outlet } from "react-router";

import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation/Navigation";
import styles from "./satisfactoryLayout.module.scss";

export function SatisfactoryLayout() {
	return (
		<>
			<Navigation />
			<div className={styles.satisfactoryAppContainer}>
				<main className={styles.mainContainer}>
					<Outlet />
				</main>
				<div className={styles.footerContainer}>
					<Footer />
				</div>
			</div>
		</>
	);
}
