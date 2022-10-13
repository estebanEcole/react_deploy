import styles from "./login.module.css";

import { useRef } from "react";
import {useState} from "react";

const Login = () => {
	
	const nameInputRef = useRef();
	
	const [nameOutput, setNameOutput] = useState('');
	const [nameIsValid, setNameIsValid] = useState(false)
	const [isNameTouched, setIsNameTouched] = useState(false)
	
	const formSubmissionhandler = (event) => {
		event.preventDefault();
		console.log('name: ' + nameInputRef.current.value);
		setNameOutput(nameInputRef.current.value);
		console.log('name: ' + nameOutput);
	}
	const nameInputHandler = (event) => {
		event.preventDefault();
		setNameOutput(nameInputRef.current.value);
		if(nameInputRef.current.value.length >= 2){
			setNameIsValid(true);
		}else{
			setNameIsValid(false);
		}
	}
	const nameBlurHandler = (event) => {
		event.preventDefault();
		setIsNameTouched(true);
		
		if(nameOutput.trim() === ''){
			setNameIsValid(false);
			return;
		}
	}
	const nameInputIsInvalid = !nameIsValid && isNameTouched;
	const nameInputClasses = nameInputIsInvalid ? styles.nameNoValide : styles.nameValide;
	
	return (
		<form onSubmit={formSubmissionhandler}>
			<div className={styles.login}>
				<div className={styles.interior}>
					<p>bonjour, veuillez entrer votre nom :</p>
					<input value={nameOutput}
						   onBlur={nameBlurHandler}
						   onChange={nameInputHandler}
						   ref={nameInputRef}
						   className={styles.nameInput}/>
					{(isNameTouched && <p className={nameInputClasses}>{nameInputIsInvalid ? 'Nom invalide' : 'Nom valide   ->   ' + nameOutput  }</p>)}
					{(!isNameTouched && <p>empty</p>)}
				</div>
				<div className={styles.interior}>
					<button className={styles.button}>
						<div className={styles.buttonText}>Connexion</div>
					</button>
				</div>
			</div>
		</form>
	);
}

export default Login;