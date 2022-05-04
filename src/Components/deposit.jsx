import React from "react";
import UserContext from "./context";
import Card from "react-bootstrap";

function Deposit() {
	const [display, setDisplay] = React.useState(true);
	const [message, setMessage] = React.useState("");
	const ctx = React.useContext(UserContext);
	const [balance, setBalance] = React.useState(ctx.users[0].balance);

	return (
		<Card
			txtcolor='white'
			bgcolor='info'
			header='Make a Deposit'
			message={message}
			body={
				display ? (
					<DepositForm setDisplay={setDisplay} />
				) : (
					<DepositMessage setDisplay={setDisplay} />
				)
			}
		/>
	);

	function DepositForm(props) {
		const [deposit, setDeposit] = React.useState("");
		const [disabled, setDisabled] = React.useState(true);

		function handleDeposit() {
			if (!validation(Number(deposit), balance)) return;
			setBalance(balance + Number(deposit));
			ctx.users[0].balance = balance + Number(deposit);
			timeStamp();
			setDeposit("");
			setDisplay(false);
		}

		function timeStamp() {
			let transactionDate = new Date();
			ctx.users[0].history.push({
				type: "deposit",
				amount: deposit,
				date: transactionDate,
			});
		}

		return (
			<>
				<span className='balance-information'>Account Balance: ${balance}</span>
				<br />
				<br />
				Deposit Amount
				<input
					type='input'
					className='form-control'
					id='deposit'
					placeholder='$'
					value={deposit}
					onChange={(e) => {
						setDeposit(e.currentTarget.value);
						setDisabled(false);
					}}
				/>
				<h4 className='text-danger'>{message}</h4>
				<br />
				<button
					type='submit'
					className='btn btn-secondary'
					onClick={handleDeposit}
					disabled={disabled}
				>
					Deposit
				</button>
			</>
		);
	}

	function DepositMessage(props) {
		return (
			<>
				<span className='balance-information'>Account Balance ${balance}</span>
				<br />
				<br />
				<h5 className='text-warning'> funds deposited!</h5>
				<button
					type='submit'
					className='btn btn-secondary'
					onClick={() => props.setDisplay(true)}
				>
					Deposit Again
				</button>
			</>
		);
	}

	function validation(deposit, balance) {
		if (isNaN(deposit) | (deposit < 1)) {
			setMessage("You must indicate a whole numeric value");
			setTimeout(() => setMessage(""), 2300);
			return false;
		}
		return true;
	}

	// function handleDate(){
	//   let today = dateFormat(new Date(), "m-d-Y h:i:s");
	//   return today;
	// }
}

export default Deposit;
