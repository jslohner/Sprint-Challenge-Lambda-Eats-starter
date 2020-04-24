import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';

const PizzaForm = props => {
	return (
		<div className='pizza-form-container'>
			<div className='pizza-form-header'>
				<h2>Build Your Own Pizza</h2>
			</div>
			<form className='pizza-form'>
				<h3>Build</h3>

				<label>Please Enter Your Name - <input name='name' type='text'/> </label>

				<label>Select a Size
					<select name='size'>
						<option>Please Choose a Size</option>
						<option>Small</option>
						<option>Medium</option>
						<option>Large</option>
					</select>
				</label>

				<div className='toppings'>
					<p>Toppings</p>
					<label><input name='pepperoni' type='checkbox'/>Pepperoni</label>
					<label><input name='sausage' type='checkbox'/>Sausage</label>
					<label><input name='bacon' type='checkbox'/>Bacon</label>
					<label><input name='jalapenos' type='checkbox'/>Jalapenos</label>
					<label><input name='tomatoes' type='checkbox'/>Tomatoes</label>
				</div>

				<label>Special Instructions <input name='special' type='text'/></label>

				<button>Submit Order</button>
			</form>
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
