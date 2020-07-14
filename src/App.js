import React from 'react';
import './index.css'
import BookContextProvider from './context/BookContext';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import NewBookForm from './components/BookForm';
import WeatherApp from './weatherComponent/Weather';

function App() {
  return (
    <div className="App">
    
      
       <BookContextProvider>
       <Navbar/>
       <BookList/>
       <NewBookForm/>
      </BookContextProvider>
     

      <div >
      <WeatherApp/>
      </div>
    </div>
  );
}

export default App;
