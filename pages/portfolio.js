import React, { useRef } from "react";
import {
  Heading,
  SimpleGrid,
  Box,
  VStack,
  Img,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Typical from "react-typical";

const creative = [
  {
    src: "/creative/Bboxx Faida Flyer changes.png",
    bw: "creative/Bboxx Faida Flyer changes bw.png",
    name: "lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit massa enim nec dui nunc mattis enim ut tellus. Cursus in hac habitasse platea dictumst.",
  },
  {
    src: "/creative/SYOKINET-28_1.jpg",
    bw: "/creative/SYOKINET-28_1 bw.png",
    name: "lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit massa enim nec dui nunc mattis enim ut tellus. Cursus in hac habitasse platea dictumst.",
  },
  {
    src: "/creative/Upper Hill Dental Cntr-121.jpg",
    bw: "/creative/Upper Hill Dental Cntr-121 bw.png",
    name: "lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit massa enim nec dui nunc mattis enim ut tellus. Cursus in hac habitasse platea dictumst.",
  },
  {
    src: "/creative/Utamaduni.jpg",
    bw: "/creative/Upper Hill Dental Cntr-121 bw.png",
    name: "lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit massa enim nec dui nunc mattis enim ut tellus. Cursus in hac habitasse platea dictumst.",
  },
];
const strategy = [
  {
    src: "/strategy/7N7A3683.JPG",
    bw: "/strategy/7N7A3683 bw.png",
    name: "lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit massa enim nec dui nunc mattis enim ut tellus. Cursus in hac habitasse platea dictumst.",
  },
  {
    src: "/strategy/7N7A3796.JPG",
    bw: "/strategy/7N7A3796 bw.png",
    name: "lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit massa enim nec dui nunc mattis enim ut tellus. Cursus in hac habitasse platea dictumst.",
  },
  {
    src: "/strategy/7s safari.jpeg",
    bw: "/strategy/7s safari bw.png",
    name: "lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit massa enim nec dui nunc mattis enim ut tellus. Cursus in hac habitasse platea dictumst.",
  },
  {
    src: "/strategy/WTO-Director-General.png",
    bw: "/strategy/WTO-Director-General bw.png",
    name: "lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit massa enim nec dui nunc mattis enim ut tellus. Cursus in hac habitasse platea dictumst.",
  },
];
const event = [
  {
    src: "/events/Greenlife.jpeg",
    bw: "/events/Greenlife bw.png",
    name: "lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit massa enim nec dui nunc mattis enim ut tellus. Cursus in hac habitasse platea dictumst.",
  },
  {
    src: "/events/MSK Keynote speaker.jpg",
    bw: "/events/MSK Keynote speaker bw.png",
    name: "lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit massa enim nec dui nunc mattis enim ut tellus. Cursus in hac habitasse platea dictumst.",
  },
  {
    src: "/events/Safari 7s.jpeg",
    bw: "/events/7s safari bw.png",
    name: "lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit massa enim nec dui nunc mattis enim ut tellus. Cursus in hac habitasse platea dictumst.",
  },
  {
    src: "/events/Winners 7s.jpeg",
    bw: "events/Winners 7s bw.png",
    name: "lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit massa enim nec dui nunc mattis enim ut tellus. Cursus in hac habitasse platea dictumst.",
  },
];

const MotionBox = motion(Box);
const MotionImg = motion(Img);

function Portfolio() {
  return (
    <VStack justify={"space-between"} spacing={4} mb="4">
      <Box mb={4}>
        <Heading>Portfolio</Heading>
      </Box>
      <Text size="3xl">
        {" "}
        The team at Kingeley does {""}
        <Typical
          loop={Infinity}
          wrapper="b"
          steps={[
            "Creative Design",
            1500,
            "Brand Strategy",
            1500,
            "Event Management",
            1500,
          ]}
        />
      </Text>
      <Flex>
        <Heading> Creative Design</Heading>
      </Flex>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={20}>
        {creative.map((data, index) => {
          return (
            <MotionBox
              key={index}
              initial={{ opacity: 0, translateX: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <Images
                key={index}
                bwsrc={data.bw}
                src={data.src}
                alt={data.name}
                description={data.description}
              />
            </MotionBox>
          );
        })}
      </SimpleGrid>
      <Flex>
        <Heading> Brand Strategy</Heading>
      </Flex>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={20}>
        {strategy.map((data, index) => {
          return (
            <MotionBox
              key={index}
              initial={{ opacity: 0, translateX: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <Images
                key={index}
                bwsrc={data.bw}
                src={data.src}
                alt={data.name}
                description={data.description}
              />
            </MotionBox>
          );
        })}
      </SimpleGrid>
      <Flex>
        <Heading>Event Management</Heading>
      </Flex>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={20}>
        {event.map((data, index) => {
          return (
            <MotionBox
              key={index}
              initial={{ opacity: 0, translateX: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <Images
                key={index}
                bwsrc={data.bw}
                src={data.src}
                alt={data.name}
                description={data.description}
              />
            </MotionBox>
          );
        })}
      </SimpleGrid>
    </VStack>
  );
}

const Images = ({ bwsrc, src, name, description }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  //const imageRef = useRef(null);

  return (
    <Box boxSize={"250px"}>
      <MotionImg
        // onMouseEnter={() => {
        //   imageRef.current.src={src}
        // }}
        // onMouseLeft={() => {
        //   imageRef.current.src={bwsrc}
        // }}
        src={src}
        alt={name}
        boxSize="250px"
        htmlHeight={150}
        borderRadius="md"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.6, ease: [0.6, 0.01, -0.05, 0.9] }}
        onClick={onOpen}
        //ref={imageRef}
      />

      <Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack>
              <Img
                src={src}
                alt={name}
                boxSize="250px"
                htmlHeight={150}
                borderRadius="md"
              />
              <Text>{description}</Text>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Portfolio;
