import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import HomePage from './components/HomePage.js';
import PizzaForm from './components/PizzaForm.js';

const App = () => {
	return (
		<div>
			<header>
				<h1>Lambda Eats</h1>
				<Route path='/piza'>
					<Link to='/'>Home</Link>
				</Route>
			</header>
			<Switch>
				<Route path='/pizza'>
					<PizzaForm />
				</Route>

				<Route path='/'>
					<HomePage />
				</Route>
			</Switch>
		</div>
	);
};
export default App;
