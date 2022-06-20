import React, { useState } from 'react'
import { Container, Flex, Divider, InputGroup, Input, InputRightElement, Button, IconButton, Text, Heading, Box } from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'
import TrendingText from './trendingText'


export default function RightSidebar() {

    return (
        <Flex pos="fixed" right="0" minW="280px" flexDir="column" className='sidebarBG' h="100vh" zIndex={99} top="50px">
            <Flex p="5%" flexDir="column" w="100%" alignItems="center" >
                <Flex mt="30px" align="center" h="max-content">
                    <InputGroup size='medium'>
                        <Input pr='5rem' type="text" placeholder='Search' padding="10px" borderRadius={15} />
                        <InputRightElement width='4.5rem'>
                            <IconButton border='0px' borderRadius={50} variant='outline' backgroundColor='#D7C9B8' fontSize='15px' ml="10px" mt="5px" icon={<FiSearch />} p={10} />
                        </InputRightElement>
                    </InputGroup>
                </Flex>

                <Flex p="5%" flexDir="column" w="100%" alignItems="center" as="nav" >
                    <Box pos="sticky" left="5" h="500px" marginTop="40px" boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)" borderRadius="15px" w="250px" backgroundColor="#BC8B6F">
                        <Container alignItems="inherit" w="100%" justifyContent={'space-between'} >
                            <Heading as="h2" fontSize={"large"} fontWeight="500" textAlign="center" color="white" mb="20px" mt="20px">TRENDING</Heading>
                        </Container>

                        <Divider height='1px' backgroundColor={"white"} />
                        <TrendingText fontSize="lg" text="Realism" />

                        <Divider height='1px' backgroundColor={"white"} />
                        <TrendingText fontSize="lg" text="Realism" />

                        <Divider height='1px' backgroundColor={"white"} />
                        <TrendingText fontSize="lg" text="Digital" />

                        <Divider height='1px' backgroundColor={"white"} />
                        <TrendingText fontSize="lg" text="Nature" />

                        <Divider height='1px' backgroundColor={"white"} />
                        <TrendingText fontSize="lg" text="Digital" />

                        <Divider height='1px' backgroundColor={"white"} />
                        <TrendingText fontSize="lg" text="Nature" />

                        <Divider height='1px' backgroundColor={"white"} />
                        <TrendingText fontSize="lg" text="Nature" />

                        <Divider height='1px' backgroundColor={"white"} />
                        <TrendingText fontSize="lg" text="Digital" />

                        <Divider height='1px' backgroundColor={"white"} />
                        <TrendingText fontSize="lg" text="Nature" />

                        <Divider height='1px' backgroundColor={"white"} />
                        <TrendingText fontSize="lg" text="letlenilead" />

                        <Divider height='1px' backgroundColor={"white"} />
                    </Box>

                </Flex>
                <Text color="White" ml={2} fontSize="lg">©HowartMUnteseo 2022</Text>
            </Flex>

        </Flex >
    );

}