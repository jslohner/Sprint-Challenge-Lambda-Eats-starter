import React from 'react';
import { useHistory } from 'react-router-dom';

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
