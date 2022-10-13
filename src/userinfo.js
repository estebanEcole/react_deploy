import styles from "./userinfo.module.css";

const UserInfo = (props) => {
	const {name, firstname, age, birthdate} = props;
	return (
		<div className={styles.login}>
			<div className={styles.interior}>
				<p>nom : {name}</p>
				<p>firstname : {firstname}</p>
				<p>age : {age}</p>
				<p>birthdate : {birthdate}</p>
			</div>
		</div>
	);
}


export default UserInfo;