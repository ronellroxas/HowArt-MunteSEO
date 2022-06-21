import { Box, Modal, ModalOverlay, ModalContent, Input , Grid, GridItem , Center, Spacer, Text, HStack, ModalHeader, Image, ModalBody, IconButton, Button } from "@chakra-ui/react"
import { BiUpload } from 'react-icons/bi';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { IconContext } from "react-icons/lib";
import { useDisclosure } from '@chakra-ui/react'
import Comments from './Comments.js';

export default function LandingPagePosts(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box className="landingImageContainer">
      <Box onClick={onOpen}>
        <Image height="auto" width="100%" src={props.url}/>
        <Box className="bottomLeft">
            <Image className="landingPosts" borderRadius='full' boxSize='7' src={props.userPic}/> {props.userName}
        </Box>
      </Box>
        
      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Box>
              <HStack>
                <Image borderRadius='full' boxSize='10' src={props.userPic}/> 
                <Text fontSize="16">{props.userName}</Text> 
                <Button backgroundColor="#3F3F3F" color="#D7C9B8" size="sm" borderRadius="14">Follow</Button> 
                <Spacer/> 
                <IconButton size="md" icon={<BiUpload />}/> 
                <Button backgroundColor="#BC8B6F" color="white" size="md">Commission</Button>
              </HStack>
            </Box>
          </ModalHeader>
          <ModalBody>
            <Center>
              <Image height="auto" htmlWidth="50%" src={props.url}/>
            </Center>
            <IconContext.Provider value={{color:"#C72424"}}>
              <Button backgroundColor="#D7C9B8" borderRadius="22" fontWeight="700" size="md" leftIcon={<BsFillSuitHeartFill/>} marginTop="7" marginLeft="1"> 99,028 likes</Button>
            </IconContext.Provider>
            <Box marginLeft="2" marginRight="2">
              <Text fontWeight="900" fontSize="18" marginTop="2" marginBottom="2" >STARRY NIGHT</Text>
              <Grid 
                templateColumns="repeat(3, 1fr)"
                templateRows="repeat(2, 1fr)"
              >
                <GridItem colStart={1} colEnd={2} rowSpan={1}>
                  <HStack><Text fontWeight="700">Medium: </Text><Text>Oil Paint</Text></HStack>
                </GridItem>
                <GridItem colStart={2} colEnd={3} rowSpan={1}>
                  <HStack><Text fontWeight="700">Dimension: </Text><Text>74cm x 92cm</Text></HStack>
                </GridItem>
                <GridItem colStart={3} colEnd={4} rowSpan={1}>
                  <HStack><Text fontWeight="700">Created: </Text><Text>June 1889</Text></HStack>
                </GridItem>

                <GridItem colStart={1} colEnd={2} rowSpan={2}>
                  <HStack><Text fontWeight="700">Style: </Text><Text>Post-impressionism</Text></HStack>
                </GridItem>
                <GridItem colStart={2} colEnd={3} rowSpan={2}>
                  <HStack><Text fontWeight="700">Subject: </Text><Text>Saint-Remy-de-Provence</Text></HStack>
                </GridItem>
                <GridItem colStart={3} colEnd={4} rowSpan={2}>
                  <HStack><Text fontWeight="700">Price: </Text><Text>N/A</Text></HStack>
                </GridItem>
              </Grid>
              <Text fontWeight="900" fontSize="18" marginTop="4" marginBottom="2">COMMENTS</Text>
              <Comments userPic={props.userPic} userName={props.userName}/>
              <Comments userPic={props.userPic} userName={props.userName}/>
              <HStack>
                <Image borderRadius='full' boxSize='10' src={"https://www.biography.com/.image/t_share/MTE1ODA0OTcxNzgzMzkwNzMz/william-shakespeare-194895-1-402.jpg"}/>
                <Input backgroundColor="#e7e7e7" borderRadius="12" placeholder='Write a comment.' />
              </HStack>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}
