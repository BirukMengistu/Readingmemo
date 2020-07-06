import React, { createContext, useReducer , useEffect} from 'react';

import { BookReducer } from '../reducer/BookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  // load date from local storage  if there is data , if not use empty array
      const [books, dispatch ] = useReducer(BookReducer , [] ,
        ()=>{
          const localData = localStorage.getItem('books');
          return localData? JSON.parse(localData) : []
        });
   
  // local storage 
        useEffect(() => {
          localStorage.setItem(('books'), JSON.stringify(books))
        }, [books]);
      return (
        <BookContext.Provider value={{ books, dispatch }}>
          {props.children}
        </BookContext.Provider>
      );
}
 
export default BookContextProvider;





/* 

const addBook = (title, author) => {
    setBooks([...books, {title, author, id: uuidv4()}]);
  };
  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  }




{title: 'The Secret', author: 'patrick rothfuss', id: 1},
    {title: 'Inside human mind', author: 'brandon sanderson', id: 2},
    {title: 'The Secret', author: 'Handson', id: 3},
    {title: 'Loop to the false mind', author: 'brandon sanderson', id: 4},
    {title: 'the seventh habit', author: 'Steven covey', id: 5},
    {title: 'Mind set ', author: 'Gorege to', id: 6} */