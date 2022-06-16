import React from 'react'
import { Flex, Text, Icon, Link, Menu, MenuButton } from '@chakra-ui/react'


export default function TrendingText({ text }) {
    return (
        <Flex flexDir="column" w="100%" alignItems="flex-start" >
            <Link color="white" padding={2} paddingStart={5}
                _hover={{ textDecor: 'none', backgroundColor: "#6C4D3C" }} w="100%">
                <Text fontSize="lg" >{text}</Text>
            </Link>
        </Flex >
    )
}