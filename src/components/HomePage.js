import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {

	return (
		<div className='top-content'>
			<p>Welcome to the Lambda Eats Homepage!</p>
			<Link to='/pizza'>
				<button className='pizza-form-button'>Pizza?</button>
			</Link>

		</div>
	);
};
export default HomePage;
