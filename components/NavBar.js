import React from 'react';
import { Flex, Stack, Button, Text, IconButton, Modal, ModalOverlay, ModalHeader, ModalContent, ModalCloseButton, Box, ModalBody, ModalFooter } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { FiShoppingCart } from 'react-icons/fi'
import Image from 'next/image'

export default function NavBar() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Box className="navbar" backgroundColor="#3F3F3F" w="100%" h="1vh" px={50} minH={50} align="center" justify="center" position="fixed" zIndex={50}>
                <Flex w='100%' h='100%' justifyContent={'space-between'} alignItems={'center'}>
                    <Box>
                        <Image src="/HowArt MUnteSEO.png" alt="Logo" width={250} height={30} />
                    </Box>

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={10}>

                            <IconButton border='0px' borderRadius={50} variant='outline' backgroundColor='#D7C9B8' fontSize='1em' icon={<FiShoppingCart />} p={10} />
                            <Button border='0px' borderRadius={10} onClick={onOpen} backgroundColor='#BC8B6F' color="white" py={5} px={20}>
                                Logout
                            </Button>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>

            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} zIndex={200}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text fontWeight='bold' mb='1rem'>
                            You can scroll the content behind the modal
                        </Text>

                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}