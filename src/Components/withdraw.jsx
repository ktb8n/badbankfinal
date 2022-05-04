import React from "react";
import UserContext from "./context";
import {Card} from "react-bootstrap";

function Withdraw() {
	const [display, setDisplay] = React.useState(true);
	const [message, setMessage] = React.useState("");
	const ctx = React.useContext(UserContext);
	const [balance, setBalance] = React.useState(ctx.users[0].balance);

	return (
		<Card
			txtcolor='white'
			bgcolor='info'
			header='Get Money'
			message={message}
			body={
				display ? (
					<WithdrawForm setDisplay={setDisplay} />
				) : (
					<WithdrawMessage setDisplay={setDisplay} />
				)
			}
		/>
	);

	function WithdrawForm(props) {
		const [withdraw, setWithdraw] = React.useState("");
		const [disabled, setDisabled] = React.useState(true);

		function handleWithdrawal() {
			if (!validation(Number(withdraw), balance)) return;
			setBalance(balance - withdraw);
			ctx.users[0].balance = balance - Number(withdraw);
			timeStamp();
			setWithdraw("");
			setDisplay(false);
		}

		function timeStamp() {
			let transactionDate = new Date();
			ctx.users[0].history.push({
				type: "withdrawal",
				amount: withdraw,
				date: transactionDate,
			});
		}

		return (
			<>
				<span className='balance-information'>Account Balance: ${balance}</span>
				<br />
				<br />
				Withdrawal Amount
				<input
					type='input'
					className='form-control'
					id='withdraw'
					placeholder='How much do you want'
					value={withdraw}
					onChange={(e) => {
						setWithdraw(e.currentTarget.value);
						setDisabled(false);
					}}
				/>
				<h4 className='text-danger'>{message}</h4>
				<br />
				<button
					type='submit'
					className='btn btn-secondary'
					onClick={handleWithdrawal}
					disabled={disabled}
				>
					Withdraw
				</button>
			</>
		);
	}

	function WithdrawMessage(props) {
		return (
			<>
				<span className='balance-information'>Account Balance ${balance}</span>
				<br />
				<br />
				<h5 className='text-warning'>Take your money!</h5>
				<button
					type='submit'
					className='btn btn-secondary'
					onClick={() => props.setDisplay(true)}
				>
					Withdraw Again
				</button>
			</>
		);
	}

	function validation(withdrawal, balance) {
		if (withdrawal > balance) {
			setMessage("You don't have enough money for that.");
			setTimeout(() => setMessage(""), 2300);
			return false;
		}
		if (isNaN(withdrawal) | (withdrawal < 1)) {
			setMessage("You must indicate a whole numeric value");
			setTimeout(() => setMessage(""), 2300);
			return false;
		}
		return true;
	}
};

export default Withdraw;
