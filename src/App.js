//import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AllData from './Components/alldata';
import CreateAccount from './Components/createaccount';
import Deposit from './Components/deposit';
import Home from './Components/home';
import Login from './Components/login';
import NavBar from './Components/navbar';
import Withdraw from './Components/withdraw';
import React from "react";
//import ReactRouterDOM from "react-dom"
//import HashRouter from "react"; //import Context from './Components/context'; //import Route from "react";
import {UserContext} from './Components/context';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<UserContext.Provider
				value={{
					users: [
						{
							name: "Porky",
							email: "PorkythePig@mit.edu",
							password: "bacon",
							balance: 400,
							history: [],
						},
					],
				}}
			>
				<div className='container' style={{ padding: "20px" }}>
					<Routes>
						<Route path='/' exact element={<Home />} />
						<Route path='/createaccount/' element={<CreateAccount/>} />
						<Route path='/login/' element={<Login />} />
						<Route path='/deposit/' element={<Deposit />} />
						<Route path='/withdraw/' element={<Withdraw />} />
						<Route path='/alldata/' element={<AllData />} />
					</Routes>
				</div>
			</UserContext.Provider>
		</BrowserRouter>
	);
}
export default App;
