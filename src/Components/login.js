import React from "react";
import {UserContext} from './context';

function Login() {
	const [show, setShow] = React.useState(true);
	//controls whether or not data is displayed
	const [login, setLogin] = React.useState(false);
	//toggles appropriate options for display
	const [validateEmail, setValidateEmail] = React.useState("");
	//parameter 1/2 that must pass for displaying
	const [validatePassword, setValidatePassword] = React.useState("");
	//parameter 2/2that must pass for displaying
	const ctx = React.useContext(UserContext);
	//i dont know this well enough yet
	const [disabled, setDisabled] = React.useState(true);
	//disable button until form is filled

	function handleLogin() {
		alert("feature coming soon!");
	}

	return (
		<>
			Email
			<br />
			<input
				type='input'
				className='form-control'
				id='email'
				placeholder='Enter email'
				value={validateEmail}
				onChange={(e) => {
					setValidateEmail(e.currentTarget.value);
					setDisabled(false);
				}}
			/>
			<br />
			Password
			<br />
			<input
				type='password'
				className='form-control'
				id='password'
				placeholder='Enter password'
				value={validatePassword}
				onChange={(e) => {
					setValidatePassword(e.currentTarget.value);
					setDisabled(false);
				}}
			/>
			<br />
			<button
				type='submit'
				className='btn btn-dark'
				onClick={handleLogin}
				disabled={disabled}
			>
				Login
			</button>
		</>
	);
}

export default Login;
