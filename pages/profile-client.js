import Layout from '../components/layout'
import {Avatar, Box, Button, Badge, Center,  Flex, Grid, GridItem, Heading, HStack, IconButton} from "@chakra-ui/react"
import {CheckIcon, CheckCircleIcon, EmailIcon, ChevronDownIcon} from '@chakra-ui/icons'
export default function profile_client() {
   

    return (
        <Box bg='tomato' w='100%' h='100%'  p={4} color='black'>
            <Grid h="25vh" templateRows='repeat(3, 1fr)' templateColumns='repeat(7, 1fr)' bg="orange">
                <GridItem rowSpan={3} colSpan={2} bg="papayawhip" centering>
                    <Center w="100%" h="100%">
                        <Avatar size="2xl" src="avatar-1.jpg" mt={4} />
                    </Center>
                </GridItem>
                <GridItem rowSpan={3} colSpan={5} bg="tomato">
                    <Box bg="yellow" w="100%" h ="5vh">     
                        <HStack  w="100%" h="100%" direction="row" align="center"spacing="10px">  
                            <Heading w="40%"fontSize="2xl">@howardmalakas</Heading>
                            <Button w="20%"justify="start" h="30px" fontSize="md"><Center w="100%" h="100%"> <CheckIcon marginEnd="2px"/>Followed</Center> </Button>
                            <Badge w="25%"justify="start"  h="30px" fontSize="md"><Center w="100%" h="100%"><CheckCircleIcon marginEnd="2px"/> Commission</Center></Badge>
                            <IconButton size="xs"colorScheme="blue" icon={<EmailIcon/>}/>
                            <IconButton size="xs" colorScheme="blue" icon={<ChevronDownIcon/>}/>
                        </HStack>
                    </Box>
                    <Box bg="papayawhip" w="100%" h ="10vh"> </Box>
                    <Box bg="tomato" w="100%" h ="10vh"> </Box>
                </GridItem>
            </Grid>
            <Box bg="blue" w="100%" h="5vh" p={4} color='black'>
                Common Tags: 
            </Box>
        </Box>
    )
  }
  
profile_client.getLayout = function getLayout(page) {
    return (
      <Layout>{page}</Layout>
    )
 }