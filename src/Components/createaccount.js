import React from "react";
import Context from "./context";
import {UserContext} from "./context";
import {Card} from "./context";

function CreateAccount() {
	const [show, setShow] = React.useState(true);
	const [status, setStatus] = React.useState("");
	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const ctx = React.useContext(UserContext);
	console.log(ctx);

	function validate(field, label) {
		if (!field) {
			setStatus("Error: you must enter your " + label);
			setTimeout(() => setStatus(""), 3000);
			return false;
		}
		return true;
	}

	function handleCreate() {
		console.log(name, email, password);
		if (!validate(name, "name")) return;
		if (!validate(email, "email")) return;
		if (!validate(password, "password")) return;
		ctx.users.push({ name, email, password, balance: 100 });
		setShow(false);
	}

	function clearForm() {
		setName("");
		setEmail("");
		setPassword("");
		setShow(true);
	}

	return (
		<Card
			bgcolor='info'
			header='Create Account'
			status={status}
			body={
				show ? (
					<>
						Name
						<br />
						<input
							type='input'
							className='form-control'
							id='name'
							placeholder='Enter name'
							value={name}
							onChange={(e) => setName(e.currentTarget.value)}
						/>
						<br />
						Email address
						<br />
						<input
							type='input'
							className='form-control'
							id='email'
							placeholder='Enter email'
							value={email}
							onChange={(e) => setEmail(e.currentTarget.value)}
						/>
						<br />
						Password
						<br />
						<input
							type='password'
							className='form-control'
							id='password'
							placeholder='Enter password'
							value={password}
							onChange={(e) => setPassword(e.currentTarget.value)}
						/>
						<br />
						<button
							type='submit'
							className='btn btn-secondary'
							onClick={handleCreate}
						>
							Create Account
						</button>
					</>
				) : (
					<>
						<h5>Success</h5>
						<button
							type='submit'
							className='tn btn-secondary'
							onClick={clearForm}
						>
							Add another account
						</button>
					</>
				)
			}
		/>
	);
}

export default CreateAccount;
