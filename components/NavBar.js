import React, { Component, Fragment } from 'react';
import { Container, Flex, Divider, InputGroup, Input, InputRightElement, Stack, Button, Text, Lorem, IconButton, Heading, Modal, ModalOverlay, ModalHeader, ModalContent, ModalCloseButton, Box, ModalBody, ModalFooter } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { FiShoppingCart } from 'react-icons/fi'
import TrendingText from './trendingText'
export default function NavBar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef(null)
    return (
        <Box backgroundColor={"Black"} w="full" h="5 vh" bg='gray.900' px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <Box paddingLeft="72px">
                    <img
                        src="/HowArt MUnteSEO.png"
                        alt="Logo"
                        height="100%"
                        width="100%"
                    />
                </Box>

                <Flex alignItems={'center'}>
                    <Stack direction={'row'} spacing={7}>

                        <IconButton variant='outline' backgroundColor={'#BC8B6F'} fontSize='20px' icon={<FiShoppingCart />} />
                        <Button mt={0} onClick={onOpen} backgroundColor={'#BC8B6F'} >
                            Log Out
                        </Button>


                    </Stack>
                </Flex>
            </Flex>

            <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Logout</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>Are you sure you want to logout?</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button backgroundColor={"#BC8B6F"} mr={3} onClick={onClose}>
                            No
                        </Button>
                        <Button variant='ghost'>Yes</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}