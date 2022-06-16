import React from 'react'
import { Flex, Text, Icon, Link, Menu, MenuButton } from '@chakra-ui/react'


export default function SidebarItems({ icon, title, active, navSize }) {
    return (
        <Flex
            mt={30}
            flexDir="column"
            w="100%"
            alignItems={navSize == "small" ? "center" : "flex-start"}
        >
            <Menu placement="right">
                <Link
                    backgroundColor={active ? "white" : "#BC8B6F"}
                    color={active ? "grey" : "white"}
                    p={3}
                    borderRadius={8}
                    _hover={{ textDecor: 'none', backgroundColor: "#6C4D3C" }}
                    w={navSize == "large" && "100%"}
                >
                    <MenuButton w="100%">
                        <Flex>
                            <Icon as={icon} fontSize="xl" color={active ? "white" : "white"} />
                            <Text ml={5} fontSize="lg" display={" flex"}>{title}</Text>
                        </Flex>
                    </MenuButton>
                </Link>

            </Menu>
        </Flex >
    )
}