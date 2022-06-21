import React from 'react'
import { Flex, Text, Icon, Link, Menu, MenuButton } from '@chakra-ui/react'


export default function SidebarItems({ icon, title, page }) {
    return (
        <Flex mt={20} flexDir="column" w="100%" alignItems={"center"} >
            <Menu >
                <Link backgroundColor={"#BC8B6F"} color={"white"} p={3}
                    borderRadius={8} h="45px"
                    _hover={{ textDecor: 'none', backgroundColor: "#6C4D3C" }}
                    w={"100%"} verticalAlign="center" alignItems={"center"}
                    href={title.toLowerCase()}
                >
                    <MenuButton w="100%">
                        <Flex mt={5} ml={5} >
                            <Icon as={icon} fontSize="xXl" w="30px" h=" 30px" color={"white"} />
                            <Text ml={20} fontSize="20px" display={" flex"}>{title}</Text>
                        </Flex>
                    </MenuButton>
                </Link>

            </Menu>
        </Flex >
    )
}