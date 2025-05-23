
import React, { useState } from "react";
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'Juan Soto' 
    
  ]);

  const onAddCategory = () => {
    if ( categories.includes(newCategory) ) return;

    setCategories([ newCategory, ...categories]);
  }

 
  return(
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
       setCategories={ setCategories }
      />
    
        { 
          categories.map( (category) => (
              <GifGrid 
                key={category} 
                category={ category }
              />
          )) 
        }
    
    </>
  )
}