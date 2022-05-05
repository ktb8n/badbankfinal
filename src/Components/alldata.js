//const [ToggleOn, setToggleOn] = useState(false);
import React from "react";
import {Card}from "react-bootstrap";
import {UserContext} from './context';

function AllData() {
	const ctx = React.useContext(UserContext);

	return (
		<Card>
			<div className='card-group'>
				<div className='card'>
					<div className='card-header bg-info text-center text-white'>
						Account Name
					</div>
					{ctx.users.map(({ name }) => {
						return (
							<>
								<ul className='list-group list-group-flush'>
									<li className='list-group-item text-center'>{name}</li>
								</ul>{" "}
							</>
						);
					})}
				</div>
				<div className='card'>
					<div className='card-header bg-info text-center text-white'>
						Email
					</div>
					{ctx.users.map(({ email }) => {
						return (
							<>
								<ul className='list-group list-group-flush'>
									<li className='list-group-item text-center'>{email}</li>
								</ul>{" "}
							</>
						);
					})}
				</div>
				<div className='card'>
					<div className='card-header bg-info text-center text-white'>
						Password
					</div>
					{ctx.users.map(({ password }) => {
						return (
							<>
								<ul className='list-group list-group-flush'>
									<li className='list-group-item text-center'>{password}</li>
								</ul>{" "}
							</>
						);
					})}
				</div>
				<div className='card'>
					<div className='card-header bg-info text-center text-white'>
						Balance
					</div>
					{ctx.users.map(({ balance }) => {
						return (
							<>
								<ul className='list-group list-group-flush'>
									<li className='list-group-item text-center'>
										$ {balance}
										<button
											type='button'
											class='btn btn-info'
											//onClick={this.handleClick}
										>
											{/* {this.state.isToggleOn ? "Show History" : "Hide History"} */}
										</button>
									</li>
								</ul>
							</>
						);
					})}
				</div>
			</div>
		</Card>
	);
};

export default AllData;
