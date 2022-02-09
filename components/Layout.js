import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar  from './Navbar';

function Layout({children}) {
  return (
  <ChakraProvider>
      <Navbar/>
     {children}
  </ChakraProvider>)
}

export default Layout;

