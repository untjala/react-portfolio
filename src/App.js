import React, {useState} from 'react';
import Navigation from './components/Navigation'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Resume from './Resume'
// Here we destructure our props into their own distinct variables
export default function Welcome({ loggedIn, setLoggedIn }) {
  // Lets log our our loggedIn variable to see it change in real time
  console.log('Welcome -> loggedIn', loggedIn);
  const [page, setPage] = useState('home');
 
  let CurrentPage; 
  
   if (page === 'home') CurrentPage = Home;
   if (page === 'about') CurrentPage = About;
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