import Head from 'next/head'
import {Stack,Flex,Heading, Text,Button, Img,useBreakpointValue, useColorModeValue } from '@chakra-ui/react'
import {useRouter} from 'next/router'

export default function Home() {
  const router = useRouter();
  const text2 = useColorModeValue("yellow.200","yellow.400");

  const aboutClick = e => {
    e.preventDefault()
    router.push('/about')
  }
  
  const serviceClick = e => {
    e.preventDefault()
    router.push('/service')
  }

  return (
    <div>
      <Head>
        <title>Kingley Agency</title>
        <meta name="description" content="Kingeley Agencies website" />
        <link rel="icon" href="/Kingeley logo.png" />
      </Head>
      <Stack minH={'90vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: useColorModeValue("yellow.200","yellow.400"),
                zIndex: -1,
              }}>
              Yellow is the
            </Text>
            <br />{' '}
            <Text color={text2} as={'span'}>
              new Black
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            Kingeley is an agency that focuses on design and creativity. It is
            perfect for freelancers, agencies, and moonlighters.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={useColorModeValue("yellow.300", "yellow.400")}
              color={useColorModeValue("gray.400", "gray.800")}
              _hover={{
                bg: "yellow.300",
              }}
              onClick={serviceClick}>
              Our Services
            </Button>
            <Button rounded={'full'} onClick={aboutClick}>About us</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Img
          alt={'Index page image'}
          objectFit={'cover'}
          src="/Bulb.png"
        />
      </Flex>
    </Stack>
      </div>
  )
}
