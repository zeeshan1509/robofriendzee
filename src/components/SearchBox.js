import React from 'react';

const SearchBox = ({searchfield, searchChange}) =>{

	return (
		<div className='pa2'>
			<input 
			className='pa3 ba b--dark-green bg-lightest-blue hover-bg-light-blue .br-pill'
			type='search' 
			placeholder='Search my friends'
			onChange={searchChange}
			/>
		</div>		
	);
}

export default SearchBox;