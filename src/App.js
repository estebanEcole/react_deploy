import Login from "./login";
import Bienvenue from "./bienvenue";
import UserInfo from "./userinfo";
import F1 from "./formulaone";
import Pilots from "./F1/pilots";
import styles from "./App.module.css"


/*<Login/>

<div className={styles.spacer}></div>
<Bienvenue name={'name'}/>

<div className={styles.spacer}></div>
<UserInfo name={'name'} firstname={'firstname'} age={'age'} birthdate={'birthdate'}/>

<div className={styles.spacer}></div>*/


const App = () => {
	
	return (
		<div>
			
			<F1/>
			
		</div>
	);
}

export default App