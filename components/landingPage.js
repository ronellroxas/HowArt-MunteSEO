import { Grid, GridItem, Input , Text, HStack, IconButton, Box, InputGroup, Button, InputLeftElement} from "@chakra-ui/react"
import { CgOptions } from 'react-icons/cg';
import { FiSearch } from 'react-icons/fi';
import React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { LeftArrow, RightArrow } from "../components/arrows.tsx";
import LandingCollage from "../components/landingCollage.js";

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `${ind}` }));

export default function LandingPage() {
  const [items, setItems] = React.useState(getItems);

  return (
    <Box className="landingContainer" h='100vh' w="100%">
      <Grid 
        w="100%"
        h="100vh"
        templateColumns="repeat(9, 1fr)"
        templateRows="repeat(5, 1fr)"
      >
        <GridItem colStart={4} colEnd={7} rowSpan={1}>
            <Text className="landingTitle" fontSize="4xl" color="white">HowArt MUnteSEO</Text>
            <Text className="landingSubtitle" fontSize="sm" color="white">Sell, Collect, Commission</Text>
            <HStack>
              <InputGroup paddingLeft="1" paddingRight="1">
                <InputLeftElement
                  bgColor="#E4E4E4"
                  borderRadius="2.5"
                  pointerEvents='none'
                >
                  <FiSearch color='gray.300'/>
                </InputLeftElement>
                <Input className="landingMargin" borderRadius="2.5" bgColor="#E4E4E4" placeholder='Pixel Art' />
                <IconButton aria-label='landingOption' variant='outline' bgColor="transparent" borderRadius="3.5" color="white" icon={<CgOptions />}/>
              </InputGroup>
            </HStack>
        </GridItem>
        <GridItem colStart={3} colEnd={8} rowSpan={1} w='55vw'>
          <Text color="#7D7D7D" fontSize="14" marginTop="14" marginLeft="9">
            Categories you might want to explore...
          </Text>
          <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {items.map(({ id }) => (
              <Button
                itemId={id} // NOTE: itemId is required for track items
                key={id}
                height="20"
                width="48"
                margin="1.5"
                backgroundImage="url('https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg')"
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
              >Button {parseInt(id)+1}</Button>
            ))}
          </ScrollMenu>
        </GridItem>
        <GridItem colStart={3} colEnd={8} rowSpan={3} marginLeft="8" marginRight="8" className="hideScrollbar">
          <LandingCollage></LandingCollage>
        </GridItem>
      </Grid>
    </Box>
  )
}