import React, {useState} from 'react';
import Navigation from './components/Navigation'
import Home from './Header/index'
import Contact from './Contact/index'
import Resume from './Resume/index'
import Portfolio from './Portfolio';
// Here we destructure our props into their own distinct variables
export default function App ({ loggedIn, setLoggedIn }) {
  // Lets log our our loggedIn variable to see it change in real time
  console.log('App -> loggedIn', loggedIn);
  const [page, setPage] = useState('home');
 
  let CurrentPage; 
  
   if (page === 'home') CurrentPage = Home;
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