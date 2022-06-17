import Layout from '../components/layout'
import LandingPage from '../components/landingPage'
import {Avatar, Box, Center, Grid, GridItem} from "@chakra-ui/react"

export default function profile_client() {
    return (
        <Box bg='tomato' w='100%' h='100%'  p={4} color='white'>
            <Grid h="25vh" templateRows='repeat(3, 1fr)' templateColumns='repeat(7, 1fr)' bg="orange">
                <GridItem rowSpan={3} colSpan={2} bg="papayawhip" centering>
                    <Center w="100%" h="100%">
                        <Avatar size="2xl" src="avatar-1.jpg" mt={4} />
                    </Center>
                </GridItem>
                <GridItem rowSpan={3} colSpan={5} bg="tomato">
                    <Box bg="yellow" w="100%" h ="5vh"> </Box>
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