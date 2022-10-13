import styles from "./bienvenue.module.css";

const Bienvenue = (props) => {
	const {name} = props;
	return (
		<div className={styles.login}>
			<div className={styles.interior}>
				<p>bienvenue {name}</p>
			</div>
		</div>
	);
}

export default Bienvenue;