import React, { useContext, useState } from 'react';
import { BookContext } from '../context/BookContext';

const NewBookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(title, author);
    dispatch({type: 'ADD_BOOK' ,
              book: { title , author} 
            });
    setTitle('');
    setAuthor('');
  }

  return (
    <form className = 'input-form' onSubmit={handleSubmit}>
      <input className ='input-lable'
             type="text" 
             placeholder="book title" 
             value={title}
             onChange={(e) => setTitle(e.target.value)} />
      <input className ='input-lable'
             type="text" 
             placeholder="author name" 
             value={author}
             onChange={(e) => setAuthor(e.target.value)} />
      <input  className ='input-submit'
             type="submit" 
             value="add book" />
    </form>
  );
}
 
export default NewBookForm;