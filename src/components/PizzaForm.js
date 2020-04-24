import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import axios from 'axios';
// import * as yup from 'yup';

const PizzaForm = props => {

	const {
		values,
		onInputChange,
		onCheckboxChange,
		onSubmit,
		errors
	} = props;

	const history = useHistory();

	const goHome = () => {
		history.push('/');
	}

	//
	// useEffect(() => {
	// 	axios.get('http://localhost:3000/pizza')
	// 		.then(res => {
	// 			setForm(res)
	// 		})
	// 		.catch(err => {
	// 			console.log('error')
	// 		})
	// }, [])
	//
	// console.log(form);

	return (
		<div className='pizza-form-container'>
			<div className='pizza-form-header'>
				<h2>Build Your Own Pizza</h2>
			</div>
			<form className='pizza-form'>
				<h3>Build</h3>

				<div className='errors'>
					{<p>{errors.name}</p>}
					{<p>{errors.size}</p>}
				</div>

				<label>Please Enter Your Name - <input value={values.name} onChange={onInputChange} name='name' type='text'/> </label>

				<label>Select a Size
					<select value={values.size} onChange={onInputChange} name='size'>
						<option>Please Choose a Size</option>
						<option>Small</option>
						<option>Medium</option>
						<option>Large</option>
					</select>
				</label>

				<div className='toppings'>
					<p>Toppings</p>
					<label><input checked={values.toppings.pepperoni} onChange={onCheckboxChange} name='pepperoni' type='checkbox'/>Pepperoni</label>
					<label><input checked={values.toppings.sausage} onChange={onCheckboxChange} name='sausage' type='checkbox'/>Sausage</label>
					<label><input checked={values.toppings.bacon} onChange={onCheckboxChange} name='bacon' type='checkbox'/>Bacon</label>
					<label><input checked={values.toppings.jalapenos} onChange={onCheckboxChange} name='jalapenos' type='checkbox'/>Jalapenos</label>
					<label><input checked={values.toppings.tomatoes} onChange={onCheckboxChange} name='tomatoes' type='checkbox'/>Tomatoes</label>
				</div>

				<label>Special Instructions <input value={values.special} onChange={onInputChange} name='special' type='text'/></label>

				<button onClick={onSubmit} name='submit'>Submit Order</button>
			</form>
			<button onClick={goHome}>Home</button>
		</div>
	);
}

export default PizzaForm;

// A name text input field
// Validation for name - name must be at least 2 characters
// Dropdown form component for pizza size
// Checklist form component for toppings - at least 4 (hint: name each separately!)
// Text input form component for special instructions
// An Add to Order button that submits form and returns a database record of name, pizza size, sauce, and special instructions
