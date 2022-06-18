import Layout from '../components/layout'
import {Avatar, Box, Button, Badge, Center,  Flex, Grid, GridItem, Heading, HStack, IconButton, Text} from "@chakra-ui/react"
import {CheckIcon, CheckCircleIcon, EmailIcon, ChevronDownIcon} from '@chakra-ui/icons'
import Head from 'next/head'
export default function profile_client() {
   

    return (
        <Box  w='100%' h='100%'  p={4} className="brownText" >
            <Grid h="25vh" templateRows='repeat(3, 1fr)' templateColumns='repeat(7, 1fr)'>
                <GridItem rowSpan={3} colSpan={2} centering>
                    <Center w="100%" h="100%">
                        <Avatar size="2xl" src="avatar-1.jpg" mt={4} />
                    </Center>
                </GridItem>
                <GridItem rowSpan={3} colSpan={5}>
                    <Box  w="100%" h ="5vh">     
                        <HStack  w="100%" h="100%" direction="row" align="center"spacing="10px" justify="space-around">  
                            <Heading w="40%"fontSize="2xl">@howardmalakas</Heading>
                            <Button w="20%"justify="start" h="30px" fontSize="md" className='brownBackground'><Center w="100%" h="100%"> <CheckIcon marginEnd="2px"/>Followed</Center> </Button>
                            <Badge w="25%"justify="start"  h="30px" fontSize="md" className='brownBackground'><Center w="100%" h="100%"> <CheckCircleIcon marginEnd="2px"/> Commission</Center></Badge>
                            <IconButton size="xs"colorScheme="blue" icon={<EmailIcon/>}/>
                            <IconButton size="xs" colorScheme="blue" icon={<ChevronDownIcon/>}/>
                        </HStack>
                    </Box>
                    <Flex w="100%" h ="10vh" align="center" justify="space-around" direction="row">
                            <Text w="30%" fontSize="xl">31 posts</Text>
                            <Text w="30%" fontSize="xl">28k followers</Text>
                            <Text w="30%" fontSize="xl">129 following</Text>
                    </Flex>
                    <Box  w="100%" h ="10vh" align="start">
                        <Heading w="40%"fontSize="xl">Howard Montecillo</Heading>
                        <Text fontSize="lg">3D portrait artist! I do different styles</Text>
                    </Box>
                </GridItem>
            </Grid>
            <Box w="100%" h="5vh" p={4} className="brownText">
                
                <HStack direction="row" w="100%" h="5vh" align="center" spacing="10px" justify="start">
                    <Heading w="10%" fontSize="lg"> Common Tags:</Heading>
                    <Box borderRadius='lg' className='brownBackground' color='white' h="50%" p="1px">#3d</Box>
                    <Box borderRadius='lg' className='brownBackground' color='white' h="50%" p="1px">#stylized</Box>
                    <Box borderRadius='lg' className='brownBackground' color='white' h="50%" p="1px">#pixel</Box>
                    <Box borderRadius='lg' className='brownBackground' color='white' h="50%" p="1px">#oil</Box>
                </HStack>
            </Box>
        </Box>
    )
  }
  
profile_client.getLayout = function getLayout(page) {
    return (
      <Layout>{page}</Layout>
    )
 }