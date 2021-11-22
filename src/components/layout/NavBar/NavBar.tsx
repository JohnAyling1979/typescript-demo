import React from 'react';
import { Link } from "@chakra-ui/react"
import { Link as ReactLink } from 'react-router-dom';
import './style/NavBar.css';

function App() {
  return (
    <div className='root'>
			<Link className='link' to='/' as={ReactLink}>Home</Link>
			<Link className='link' to='/react-query' as={ReactLink}>React Query</Link>
			<Link className='link' to='/zustand' as={ReactLink}>Zustand</Link>
    </div>
  );
}

export default App;
