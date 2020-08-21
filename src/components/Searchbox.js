import React from 'react';
 const SearchBox =({searchfield, searchchange}) => {
return (
	<div className='pa2'>
<input className='pa3 ba b--green bg-light-green'
 type='search'
  placeholder='search phones'
  onChange={searchchange}
  />
</div>


	);


 }
 export default SearchBox;