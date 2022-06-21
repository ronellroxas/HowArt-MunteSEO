import { Box, HStack, Image, Text, Grid, GridItem} from "@chakra-ui/react"

export default function Comments(props) {

    return (
        <Box marginTop="1" marginBottom="1">
            <HStack>
                <Image borderRadius='full' boxSize='10' src={props.userPic}/>
                <Grid
                 templateRows="repeat(2, 1fr)"
                >
                    <GridItem rowSpan={1}><Text fontSize="16" color="#6C4D3C" fontWeight="600">{props.userName}</Text></GridItem>
                    <GridItem rowSpan={1}><Text fontSize="16">POGGIES!</Text></GridItem>
                </Grid>
            </HStack>
        </Box>
    )
}