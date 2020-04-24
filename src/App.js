import React, { useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import axios from 'axios';
import * as yup from 'yup';

import HomePage from './components/HomePage.js';
import PizzaForm from './components/PizzaForm.js';

const url = 'https://reqres.in/api/pizza';

const initFormValues = {
	name: '',
	size: '',
	toppings: {
		pepperoni: false,
		sausage: false,
		bacon: false,
		jalapenos: false,
		tomatoes: false
	},
	special: ''
}

const initFormErrors = {
	name: '',
	size: ''
}

const formSchema = yup.object().shape({
	name: yup
		.string()
		.required('Name is required')
		.min(2, 'Name must be at least 2 characters long'),
	size: yup
		.string()
		.required('Size is required'),
	special: yup
		.string()
})

const App = () => {

	const [orders, setOrders] = useState([]);

	const [formValues, setFormValues] = useState(initFormValues);
	const [formErrors, setFormErrors] = useState(initFormErrors);

	const onInputChange = evt => {
		const name = evt.target.name
		const value = evt.target.value

		yup
			.reach(formSchema, name)
			.validate(value)
			.then(valid => {
				setFormErrors({
					...formErrors,
					[name]: ''
				});
			})
			.catch(err => {
				setFormErrors({
					...formErrors,
					[name]: err.errors[0]
				});
			})

		setFormValues({
			...formValues,
			[name]: value
		});
	}

	const onCheckboxChange = evt => {
		setFormValues({
			...formValues,
			toppings: {
				...formValues.toppings,
				[evt.target.name]: evt.target.checked
			}
		})
	}

	const postOrder = order => {
		axios.post(url, order)
			.then(res => {
				setOrders([res.data, ...orders])
				console.log(res.data);
			})
			.catch(err => {
				console.log('error');
			})
	}

	const onSubmit = evt => {
		evt.preventDefault();

		const newOrder = {
			name: formValues.name,
			size: formValues.size,
			toppings: Object.keys(formValues.toppings)
				.filter(topping => formValues.toppings[topping] === true),
			special: formValues.special
		}

		postOrder(newOrder);
		setFormValues(initFormValues);
	}

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
					<PizzaForm values={formValues} onInputChange={onInputChange} onCheckboxChange={onCheckboxChange} onSubmit={onSubmit} errors={formErrors}/>
				</Route>

				<Route path='/'>
					<HomePage />
				</Route>
			</Switch>
		</div>
	);
};
export default App;
