import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './components/HomePage.js';
import PizzaForm from './components/PizzaForm.js';

const App = () => {
	return (
		<div>
			<Switch>
				<Route path='/'>
					<HomePage />
				</Route>

				<Route path='/pizza'>
					<PizzaForm />
				</Route>
			</Switch>
		</div>
	);
};
export default App;
