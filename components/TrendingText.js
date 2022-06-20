import React from 'react'
import { Flex, Text, Icon, Link, Menu, MenuButton } from '@chakra-ui/react'


export default function TrendingText({ text }) {
    return (
        <Flex flexDir="column" w="100%" alignItems="flex-start" >
            <Link padding="3px" color="white" _hover={{ textDecor: 'none', backgroundColor: "#6C4D3C" }} w="100%">
                <Text mt={5} ml={20} fontSize="20px" >{text}</Text>
            </Link>
        </Flex >
    )
}