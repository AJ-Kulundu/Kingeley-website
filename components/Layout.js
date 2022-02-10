import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

function Layout({ children }) {
  return <ChakraProvider>{children}</ChakraProvider>;
}

export default Layout;
