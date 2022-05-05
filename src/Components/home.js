import React from "react";
import {Card} from "./context";

function Home() {
	return (
		<Card
			txtcolor='info'
			header='Swine Thug Holdings LLC'
			title='Welcome to the pigpen'
			text='We trim the fat and clean your money'
			body={
				<img
					src='public/badPig.png'
					className='img-fluid'
					alt='Responsive image'
				/>
			}
		/>
	);
}

export default Home;
