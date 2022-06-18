import { Box , HStack, Grid, GridItem, Spacer, Select, Text, VStack} from "@chakra-ui/react"
import LandingPagePosts from "../components/landingPagePosts.js";

export default function LandingCollage(props) {

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

  return (
    <Box>
        <HStack spacing="3" align="center">
            <Spacer/>
            <Text color="#737373" fontWeight="normal" fontSize="12">Sort by:</Text>
            <Select fontWeight="semibold" width="28" placeholder='Popularity' size='xs'>
              <option value='sortDate'>Date</option>
              <option value='sortArtStyle'>Art Style</option>
            </Select>
        </HStack>
        <Grid
        templateColumns="repeat(3, 1fr)"
        >
        <GridItem colSpan={1} margin="2.5">
            <VStack width="100%" spacing="2.5">
            {paintingCol1.map((painting1) => (
                <LandingPagePosts key={painting1.url} url={painting1.url} userPic={painting1.userPic} userName={painting1.userName}/>
            ))}
            </VStack>
        </GridItem>
        <GridItem colSpan={1} margin="2.5">
            <VStack width="100%" spacing="2.5">
            {paintingCol2.map((painting2) => (
                <LandingPagePosts key={painting2.url} url={painting2.url} userPic={painting2.userPic} userName={painting2.userName}/>
            ))}
            </VStack>
        </GridItem>
        <GridItem colSpan={1} margin="2.5">
            <VStack width="100%" spacing="2.5">
            {paintingCol3.map((painting3) => (
                <LandingPagePosts key={painting3.url} url={painting3.url} userPic={painting3.userPic} userName={painting3.userName}/>
            ))}
            </VStack>
        </GridItem>
        </Grid>
    </Box>
  )
}
