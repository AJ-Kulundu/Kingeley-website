import React, { useState } from "react";
import {
  Flex,
  Spacer,
  Box,
  Heading,
  Text,
  useColorMode,
  IconButton,
  Link,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FaSun, FaMoon, FaTimes, FaStream } from "react-icons/fa";
//import { motion } from 'framer-motion'

//const MotionFlex = motion(Flex);
//const MotionBox = motion(Box);
//const MotionText = motion(Text)



const Navbar = () => {
  const value = useColorModeValue("white", "gray.800");
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <Flex
      mb={6}
      p={4}
      position="sticky"
      top={0}
      zIndex={3}
      bg={value}
      justify="space-between"
      boxShadow="sm"
      as="nav"
      align="center"
      wrap="wrap"
      w="100%"
      overflow="auto"
    >
      <Box>
        <Heading>Logo</Heading>
      </Box>
      <Spacer />
      <Box display={{ base: "block", md: "none" }}>
        <HStack>
          <Toggle />
          <IconButton
            icon={show ? <FaTimes /> : <FaStream />}
            variant="ghost"
            onClick={toggleMenu}
          />
        </HStack>
      </Box>
      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
        onClick={toggleMenu}
      >
        <Flex
          align="center"
          justify={{ base: "center", md: "space-between" }}
          direction={{ base: "column", md: "row" }}
        >
          <NavItem to="/">Home</NavItem>
          <NavItem to="/portfolio">Portfolio</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/contact">Contact</NavItem>
          <Box display={{ base: "none", md: "block" }} mr={{ md: 4, lg: 6 }}>
            <Toggle />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

const NavItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <NextLink href={to} passHref>
      <Text
        display="block"
        mb={{ base: isLast ? 0 : 8, sm: 0 }}
        mr={{ base: 0, sm: isLast ? 0 : 8 }}
        //whileHover={{scale:1.2}}
        {...rest}
      >
        <Link>{children}</Link>
      </Text>
    </NextLink>
  );
};

const Toggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      variant="ghost"
      aria-label="Dark/Light mode toggle"
      icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
      onClick={() => toggleColorMode()}
    />
  );
};

export default Navbar;
