import { useState } from 'react';

const AddCategory = ({ onNewCategory }) => {
	const [inputValue, setInputValue] = useState('');

	const onInputChange = event => {
		// console.log(event)
		setInputValue(event.target.value);
	};

	const onInputSubmit = event => {
		event.preventDefault();

		if (inputValue.trim().length <= 1) return;
		
		onNewCategory(inputValue.trim())
		setInputValue('');
	};

	return (
		<form onSubmit={onInputSubmit}>
			<input
				type="text"
				name=""
				id=""
				placeholder="Busca de gifts"
				value={inputValue}
				onChange={onInputChange}
			/>
		</form>
	);
};

// AddCategory.propTypes = {
// 	onNewCategory: propTypes.func

// }

export default AddCategory;
