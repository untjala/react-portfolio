import React, {useState} from 'react';
import Navigation from './components/Nav/index'
import About from './components/Header/index'
import Contact from './components/Contact/index'
import Resume from './components/Resume/index'
import Portfolio from './components/Portfolio/index';
import Footer from './components/Footer/index'
// Here we destructure our props into their own distinct variables
export default function App ({ loggedIn, setLoggedIn }) {
  // Lets log our our loggedIn variable to see it change in real time
  console.log('App -> loggedIn', loggedIn);
  const [page, setPage] = useState('about');
 
  let CurrentPage; 
  
   if (page === 'about') CurrentPage = About;
   if (page === 'portfolio') CurrentPage = Portfolio;
   if (page === 'contact') CurrentPage = Contact;
   if (page === 'resume') CurrentPage = Resume;
  // If we are loggedIn render one set of elements, and if not we render another
  return (
      <> 
      <Navigation setPage ={setPage}/>
      <CurrentPage />
      </>
    );
  }