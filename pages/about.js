import React from "react";
import {
  Stack,
  Flex,
  Heading,
  Text,
  Button,
  Img,
  useBreakpointValue,
  useColorModeValue,
  Icon,
  SimpleGrid,
  Box,
  IconButton,
  Stat,
  StatNumber,
  StatLabel
} from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';

const About = () => {
  return (
    <div>
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
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
                bg: "blue.400",
                zIndex: -1,
              }}
            >
              About
            </Text>
            <br />{" "}
            <Text color={"blue.400"} as={"span"}>
              Kingeley
            </Text>{" "}
          </Heading>
          <Text as='p' fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            One bitter cold Sunday, an old farmer trudged for miles through a
            blizzard to reach the small mountain church he attended. No one else
            showed up, except the preacher. Looking around the empty pews, the
            clergyman leaned over the pulpit and suggested to his lone
            congregant that it hardly seemed worth proceeding with the service
            with such a low turnout. Perhaps we’d do better if we returned to
            our nice, warm homes and had a hot drink,’ he said in a tone that
            blatantly encouraged the old farmer to agree. The old farmer looked
            at the preacher and said, ‘I’m just a simple farmer, but when I go
            to feed my herd if only one cow shows up, I sure don’t let her go
            hungry.’ The preacher felt embarrassed and a bit guilty, so he
            conducted the entire service – hymns, readings announcements, and a
            sermon. The whole thing lasted over an hour. After the service, he
            said to the farmer, ‘I hope that met your needs.’ The farmer said,
            ‘I’m just a simple farmer, but when I go to feed my herd if only one
            cow turns up, I sure don’t force her to eat everything I brought for
            the lot of them
          </Text>
          <br />
          <Text  as='p' fontSize={{ base: "md", lg: "lg" }} color={"gray.500"} >
          <strong>Moral of the Story: </strong>It’s important to adjust what information you deliver and how you deliver it based on who’s on the receiving end.
          </Text>
          {/* <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
          <Button
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}>
            Create Project
          </Button>
          <Button rounded={'full'}>How It Works</Button>
        </Stack> */}
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Img
          alt={"About page bulb cover"}
          objectFit={"cover"}
          src={"/bulb 23.png"}
        />
      </Flex>
    </Stack>
    <Vision />
    <Values />
    </div>
  );
};

const Vision = () => {
  return (
    <Box p={4} mx={6}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={"/icon 1.png"}
          label={'The Vision'}
          title={'The Vision'}
          text={
            'To be the leading branding firm in East Africa attaining loyalty for our customers through consumer relations'
          }
        />
        <Feature
          icon={"/icon 2.png"}
          label={'The Mission'}
          title={'The Mision'}
          text={
            'To provide strategic counsel, creative solution and timely responsive communication services'
          }
        />
        <Feature
          icon={"/icon 3.png"}
          label={'The Objective'}
          title={'The Objective'}
          text={
            'To tailor-make & implement brand communication & marketing strategies'
          }
        />
      </SimpleGrid>
    </Box>
  );
};


const Feature = ({ title, text, icon,label }) => {
  return (
    <Stack>
      <Img 
      borderRadius='full'
      boxSize='100px'
      src={icon}
      alt={label}
      />
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

// const Values = () => {
//    return(
//          <Flex
//          justify={"center"}
//          my={4}>
//            <Heading>OUR VALUES</Heading>
//            <Stack direction={{base:"column",md:"row"}}>

//            </Stack>
//          </Flex>
//    );
// }


function VCard({title, stat}) {
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}>
      <StatLabel fontWeight={'medium'} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

function Values() {
  return (
    <Box maxW="7xl" mb={6} mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <Heading
        
        textAlign={'center'}
        fontSize={'4xl'}
        py={10}
        fontWeight={'bold'}>
        Our Values
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
        <VCard title={'Creativity and Professionalism'} stat={'In our designs & implementation'} />
        <VCard title={'Commitment & Loyalty'} stat={'To our clients'} />
        <VCard title={'Reliability & Availability'} stat={'In our communication'} />
        <VCard title={'Quality & integrity'} stat={'In everything we do'} />
      </SimpleGrid>
    </Box>
  );
  }
export default About;
