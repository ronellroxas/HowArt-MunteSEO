import { Box } from "@chakra-ui/react"

export default function LandingPagePosts(props) {
  return (
    <Box className="landingImageContainer">
        <img height="auto" width="100%" src={props.url}/>
        <Box className="bottomLeft">
            <img className="landingPosts" src={props.userPic}/> {props.userName}
        </Box>
    </Box>
  )
}
