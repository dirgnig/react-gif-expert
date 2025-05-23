import { useState } from 'react';

export const AddCategory = ({ setCategories }) => {

  const [inputValue, setInputValue] = useState('');
  
  const onInputChange = ( {target} ) => {
    // console.log(event.target.value);
    setInputValue( target.value );
  }

  const onSubmit = ( event ) => {
    event.preventDefault();
    const trimmedValue = inputValue.trim();

    if(trimmedValue.length <= 1) return;

    setCategories(categories => {
      if(categories.includes(trimmedValue)) return categories;
      return [trimmedValue, ...categories];
    })

    setInputValue('');
  }

  return (

    <form onSubmit={ onSubmit }>
      <input 
      type="text" 
      placeholder="Buscar Gifs"
      value={ inputValue }
      onChange={ onInputChange }
     />
    </form>
    
  )
}