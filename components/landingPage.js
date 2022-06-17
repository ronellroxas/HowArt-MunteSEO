import { Grid, GridItem, Input , Text, Stack, HStack, VStack, IconButton, Select , Box, InputGroup, Button, InputLeftElement} from "@chakra-ui/react"
import { CgOptions } from 'react-icons/cg';
import { FiSearch } from 'react-icons/fi';
import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { LeftArrow, RightArrow } from "../components/arrows.tsx";
import LandingPagePosts from "../components/landingPagePosts.js";
import Navbar from "./NavBar.js";
import RightSideBar from "./RightSideBar.js";
import Sidebar from "./Sidebar.js";
import RightSidebar from "./RightSideBar.js";

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `${ind}` }));

const paintingCol1 = [
  {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
    userPic: 'http://www.shenyunperformingarts.org/data/image/original/2021/05/29/63ea2c642aaee001d818604fe1d9a811.jpg', userName: '@LeonadroDaVinci'},
  {url: 'https://i.pinimg.com/736x/cb/c6/62/cbc662299bd35357e519fe867444b86c.jpg',
  userPic: 'http://www.shenyunperformingarts.org/data/image/original/2021/05/29/63ea2c642aaee001d818604fe1d9a811.jpg', userName: '@LeonadroDaVinci'},
  {url: 'http://brightercraft.com/wp-content/uploads/2018/10/img_3741.jpg',
  userPic: 'http://www.shenyunperformingarts.org/data/image/original/2021/05/29/63ea2c642aaee001d818604fe1d9a811.jpg', userName: '@LeonadroDaVinci'},
  {url: 'https://i.pinimg.com/564x/bf/3e/77/bf3e77ff0fb528b2222d7bc7f6dca8e0.jpg',
  userPic: 'http://www.shenyunperformingarts.org/data/image/original/2021/05/29/63ea2c642aaee001d818604fe1d9a811.jpg', userName: '@LeonadroDaVinci'}];
const paintingCol2 = [
  {url: 'https://cdn.britannica.com/32/2832-050-9DD1D041/The-Scream-casein-cardboard-Edvard-Munch-National-1893.jpg',
  userPic: 'http://www.shenyunperformingarts.org/data/image/original/2021/05/29/63ea2c642aaee001d818604fe1d9a811.jpg', userName: '@LeonadroDaVinci'},
  {url: 'http://www.metmuseum.org/-/media/images/art/collection-landing-page/clp_teaser_700x444.jpg?sc_lang=en',
  userPic: 'http://www.shenyunperformingarts.org/data/image/original/2021/05/29/63ea2c642aaee001d818604fe1d9a811.jpg', userName: '@LeonadroDaVinci'},
  {url: 'https://i.pinimg.com/originals/d9/1d/c4/d91dc41af4952c8432f66ead19890447.png',
  userPic: 'http://www.shenyunperformingarts.org/data/image/original/2021/05/29/63ea2c642aaee001d818604fe1d9a811.jpg', userName: '@LeonadroDaVinci'},
  {url: 'https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__480.jpg',
  userPic: 'http://www.shenyunperformingarts.org/data/image/original/2021/05/29/63ea2c642aaee001d818604fe1d9a811.jpg', userName: '@LeonadroDaVinci'}];
const paintingCol3 = [
  {url: 'https://continuingstudies.uvic.ca/upload/Arts/News/ARTS-How-arts-benefits-us-all_original.jpg',
  userPic: 'http://www.shenyunperformingarts.org/data/image/original/2021/05/29/63ea2c642aaee001d818604fe1d9a811.jpg', userName: '@LeonadroDaVinci'},
  {url: 'https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0d29ya3xlbnwwfHwwfHw%3D&w=1000&q=80',
  userPic: 'http://www.shenyunperformingarts.org/data/image/original/2021/05/29/63ea2c642aaee001d818604fe1d9a811.jpg', userName: '@LeonadroDaVinci'},
  {url: 'https://render.fineartamerica.com/images/rendered/default/print/8/8/break/images/artworkimages/medium/3/deliberation-mario-sanchez-nevado.jpg',
  userPic: 'http://www.shenyunperformingarts.org/data/image/original/2021/05/29/63ea2c642aaee001d818604fe1d9a811.jpg', userName: '@LeonadroDaVinci'},
  {url: 'https://i.pinimg.com/736x/22/fe/88/22fe8831133c2556ea189a36115b45dc--knifes-artist-painting.jpg',
  userPic: 'http://www.shenyunperformingarts.org/data/image/original/2021/05/29/63ea2c642aaee001d818604fe1d9a811.jpg', userName: '@LeonadroDaVinci'},
  {url: 'https://www.thoughtco.com/thmb/Zya6PS3m6XjRAmVo1HONvY9DW_A=/3865x2174/smart/filters:no_upscale()/abstract-paper-flower-pattern-656688606-5acfba2eae9ab80038461ca0.jpg',
  userPic: 'http://www.shenyunperformingarts.org/data/image/original/2021/05/29/63ea2c642aaee001d818604fe1d9a811.jpg', userName: '@LeonadroDaVinci'}];

export default function landingPage() {
  const [items, setItems] = React.useState(getItems);

  return (
    <div className="landingContainer">
      <Grid 
        h="100vh"
        templateColumns="repeat(9, 1fr)"
        templateRows="repeat(5, 1fr)"
      >
        <GridItem colStart={4} colEnd={7} rowSpan={1}>
            <Text className="landingTitle" fontSize="32px" color="white">HowArt MUnteSEO</Text>
            <Text className="landingSubtitle" fontSize="14px" color="white">Sell, Collect, Commission</Text>
            <HStack>
              <InputGroup paddingLeft="5px" paddingRight="5px">
                <InputLeftElement
                  bgColor="#E4E4E4"
                  borderRadius="10px"
                  pointerEvents='none'
                  children={<FiSearch color='gray.300'/>}
                />
                <Input className="landingMargin" borderRadius="10px" bgColor="#E4E4E4" placeholder='Pixel Art' />
                <IconButton aria-label='landingOption' variant='outline' bgColor="transparent" borderRadius="15px" color="white" icon={<CgOptions />}
/>
              </InputGroup>
            </HStack>
        </GridItem>
        <GridItem colStart={3} colEnd={8} rowSpan={1}>
          <Text color="#7D7D7D" fontSize="14" marginTop="60px" marginLeft="35px">
            Categories you might want to explore...
          </Text>
          <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {items.map(({ id }) => (
              <Button
                itemId={id} // NOTE: itemId is required for track items
                key={id}
                height="90px"
                width="200px"
                margin="5px"
                backgroundImage="url('https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg')"
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
              >Button {parseInt(id)+1}</Button>
            ))}
          </ScrollMenu>
        </GridItem>
        <GridItem marginLeft="35%" colStart={6} colEnd={8} rowSpan={1} marginRight="30px" marginTop="12px">
          <HStack spacing="12px" align="flex-end">
            <Text color="#737373" fontWeight="400" fontSize="12">Sort by:</Text>
            <Select fontWeight="600" width="108px" marginLeft="px" placeholder='Popularity' size='xs'>
              <option value='sortDate'>Date</option>
              <option value='sortArtStyle'>Art Style</option>
            </Select>
          </HStack>
        </GridItem>
        <GridItem colStart={3} colEnd={8} rowSpan={2} marginLeft="30px" marginRight="30px" marginTop="-100px">
          <Grid
            templateColumns="repeat(3, 1fr)"
          >
            <GridItem colSpan={1} margin="10px">
              <VStack width="100%" spacing="10px">
                {paintingCol1.map((painting1) => (
                  <LandingPagePosts key={painting1.url} url={painting1.url} userPic={painting1.userPic} userName={painting1.userName}/>
                ))
                }
              </VStack>
            </GridItem>
            <GridItem colSpan={1} margin="10px">
              <VStack width="100%" spacing="10px">
                {paintingCol2.map((painting2) => (
                  <LandingPagePosts key={painting2.url} url={painting2.url} userPic={painting2.userPic} userName={painting2.userName}/>
                ))
                }
              </VStack>
            </GridItem>
            <GridItem colSpan={1} margin="10px">
              <VStack width="100%" spacing="10px">
                {paintingCol3.map((painting3) => (
                  <LandingPagePosts key={painting3.url} url={painting3.url} userPic={painting3.userPic} userName={painting3.userName}/>
                ))
                }
              </VStack>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </div>
  )
}