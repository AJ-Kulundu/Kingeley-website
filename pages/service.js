import React from "react";
import {
  Heading,
  Flex,
  Img,
  VStack,
  SimpleGrid,
  Text,
  Stack,
  useBreakpointValue,
  UnorderedList,
  ListItem,
  useColorModeValue,
  HStack,
  Center,
} from "@chakra-ui/react";

function Service() {
  return (
    <VStack>
      <Flex w="100%" mb={4} justify={"center"}>
        <Heading>WHAT WE DO</Heading>
      </Flex>
      <Flex w="50%" h="50%" mt={0} mb={4} justify={"center"}>
        <Img
          alt={"service image"}
          src="/icon 4.png"
          objectFit={"cover"}
          objectSize="100px"
        />
      </Flex>
      <Flex my="4" justify="center" w={"100%"}>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 4 }}
          spacing={{ base: "20px", md: "50px", lg: "150px" }}
        >
          <SCard
            label="Promotional Material"
            image="/icon 6.png"
            title="Promotional Material"
          />
          <SCard
            label="Creative Design"
            image="/icon 7.png"
            title="Creative Design"
          />
          <SCard
            label="Brand Design"
            image="/icon 8.png"
            title="Brand Design"
          />
          <SCard
            label="Event Management"
            image="/icon 9.png"
            title="Event Management "
          />
        </SimpleGrid>
      </Flex>
      <Strategy />
      <Flex justify="center" px={20} mx={12}>
        <Center w="100%">
          <Stack direction="column">
            <Heading>
              ``Creativity does not wait for the perfect moment. It fashions its
              own moments out of ordinary ones.``{" "}
            </Heading>
            <Center>
              <Text>Bruce Garrabrandt</Text>
            </Center>
          </Stack>
        </Center>
      </Flex>
      <Creative />
      <Flex justify="center" mb={6} px={20} mx={12}>
        <Center w="100%">
          <Stack direction="column">
            <Heading>
              ``Creativity does not wait for the perfect moment. It fashions its
              own moments out of ordinary ones.``{" "}
            </Heading>
            <Center>
              <Text>Bruce Garrabrandt</Text>
            </Center>
          </Stack>
        </Center>
      </Flex>
    </VStack>
  );
}

const SCard = ({ label, image, title }) => {
  return (
    <Stack>
      <Img alt={label} src={image} boxSize="150px" objectFit={"contain"} />
      <Text fontWeight={600}>{title}</Text>
    </Stack>
  );
};

const Strategy = () => {
  return (
    <Stack minH={"90vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: useColorModeValue("yellow.200", "yellow.400"),
                zIndex: -1,
              }}
            >
              Strategy
            </Text>
            <br />{" "}
          </Heading>
          <Heading as="h2" fontSize={{ base: "md", lg: "lg" }}>
            {" "}
            Communication and Marketing
          </Heading>
          <Text as="p" fontSize={{ base: "md", lg: "lg" }}>
            KiNGELEY helps build awareness of companies, products, services,
            people, and issues among audiences and key influencers, creating
            companies identity in the industry, media and community surrounding
            their clients. We improve product visibility, overcome buyer inertia
            and remove negative perceptions on the part of the public through
            effective communication
          </Text>
          <Heading as="h2" fontSize={{ base: "md", lg: "lg" }}>
            {" "}
            The Tools
          </Heading>
          <Text as="p" fontSize={{ base: "md", lg: "lg" }}>
            <UnorderedList>
              <ListItem>Communication& marketing Audit & Advisory</ListItem>
              <ListItem>Corporate Responsibility Programs</ListItem>
              <ListItem>Company & product Rebrand</ListItem>
              <ListItem>Route to Market & activations</ListItem>
              <ListItem>Digital Marketing</ListItem>
            </UnorderedList>
          </Text>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Img
          alt={"About page bulb cover"}
          objectFit={"cover"}
          src={"/icon 5.png"}
        />
      </Flex>
    </Stack>
  );
};

const Creative = () => {
  return (
    <Stack minH={"90vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Flex flex={1}>
          <Img
            alt={"About page bulb cover"}
            objectFit={"cover"}
            src={"/icon 11.png"}
          />
        </Flex>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: useColorModeValue("yellow.200", "yellow.400"),
                zIndex: -1,
              }}
            >
              Creative and
            </Text>
            <br /> <Text as={"span"}>Design</Text>{" "}
          </Heading>
          <Text as="p" fontSize={{ base: "md", lg: "lg" }}>
            <UnorderedList>
              <ListItem>Communication& marketing Audit & Advisory</ListItem>
              <ListItem>Corporate Responsibility Programs</ListItem>
              <ListItem>Company & product Rebrand</ListItem>
              <ListItem>Route to Market & activations</ListItem>
              <ListItem>Digital Marketing</ListItem>
            </UnorderedList>
          </Text>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default Service;
