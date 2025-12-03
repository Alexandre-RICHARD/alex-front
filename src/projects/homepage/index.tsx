import styles from "./homepage.module.scss";
import { GooeyMenu, type NavItem } from "./testSecondNav";

const navItems: NavItem[] = [
	"test",
	"court",
	"satisfactory",
	"genshin impact",
	"machin",
	"un vaut mieux que 2",
	"probmlème",
	"test",
	"court",
	"satisfactory",
	"genshin impact",
	"machin",
	"un vaut mieux que 2",
	"probmlème",
	"test",
	"court",
	"satisfactory",
	"genshin impact",
	"machin",
	"un vaut mieux que 2",
	"probmlème",
].map((label, index) => ({
	href: "#",
	id: index.toString(),
	label,
}));

export function Homepage() {
	return (
		<>
			<GooeyMenu />
			<div className={styles.homepageContainer}>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
					obcaecati amet error suscipit quidem ipsum recusandae, odit ipsam esse
					adipisci vero inventore itaque exercitationem aliquid veritatis, aut
					eligendi mollitia quam libero quo doloribus! Eius impedit voluptas a
					ipsa veniam enim vel accusantium cum quo tempore autem consequuntur
					temporibus, quam iste?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ab
					facere quis voluptatibus commodi cumque, dignissimos magnam nulla
					similique iusto adipisci ea voluptates ex autem sequi itaque, sunt
					tenetur voluptate. Accusantium nisi itaque ducimus quia, distinctio
					soluta dignissimos modi ut. Porro possimus facilis dolorum inventore
					magnam! Fugiat labore assumenda facere.
				</p>
			</div>
			;
		</>
	);
}
