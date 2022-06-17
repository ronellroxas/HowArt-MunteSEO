import React, { useState } from 'react'
import { Container, Flex, Divider, InputGroup, Input, InputRightElement, Button, IconButton, Text, Heading, Box } from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'
import TrendingText from './trendingText'


export default function RightSidebar() {
    const [navSize, changeNavSize] = useState("large")
    return (
        <Flex
            pos="sticky"
            right="0"
            h="100vh"
            
            minW="280px" 
            flexDir="column"
            justifyContent="space-between"
            className='sidebarBG'
        >
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems="center"
                mb={4}
            >
                <Flex mt={4} align="center">
                    <InputGroup size='lg' backgroundColor={"White"} borderRadius="15px">
                        <Input placeholder='Search' />
                        <InputRightElement width='4.5rem'>
                            <IconButton variant='outline' backgroundColor={'Gray'} _hover={{ backgroundColor: "#BC8B6F" }} w="75%" fontSize='20px' icon={<FiSearch />} />
                        </InputRightElement>
                    </InputGroup>
                </Flex>

                <Flex
                    p="5%"
                    flexDir="column"
                    w="100%"
                    alignItems="center"
                    as="nav"
                >
                    <Box pos="sticky"
                        left="5"
                        h="max-content"
                        marginTop="40px"
                        boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
                        borderRadius="15px"
                        w="250px"
                        backgroundColor="#BC8B6F"
                    >
                        <Container alignItems="inherit" w="100%" justifyContent={'space-between'} >
                            <Heading as="h2" size="md" textAlign={"center"} color={"white"} mt={4}>TRENDING</Heading>
                        </Container>

                        <TrendingText fontSize="lg" text="Realism" />
                        <Divider />
                        <TrendingText ml={2} fontSize="lg" text="Realism" />
                        <Divider />
                        <TrendingText ml={2} fontSize="lg" text="Digital" />
                        <Divider />
                        <TrendingText ml={2} fontSize="lg" text="Nature" />
                        <Divider />
                        <TrendingText ml={2} fontSize="lg" text="Digital" />
                        <Divider />
                        <TrendingText ml={2} fontSize="lg" text="Nature" />
                        <Divider />
                        <TrendingText ml={2} fontSize="lg" text="Nature" />
                        <Divider />
                        <TrendingText ml={2} fontSize="lg" text="Digital" />
                        <Divider />
                        <TrendingText ml={2} fontSize="lg" text="Nature" />
                        <Divider />
                        <TrendingText ml={2} fontSize="lg" text="letlenilead" />
                    </Box>

                </Flex>
                <Text color="White" ml={2} fontSize="lg">©HowartMUnteseo 2022</Text>
            </Flex>

        </Flex >
    );

}