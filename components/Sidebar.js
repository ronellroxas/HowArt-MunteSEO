import React, { useState } from 'react'
import { Flex, Divider, Avatar, Heading, InputGroup, Input, InputRightElement, Button, Box } from '@chakra-ui/react'
import { FiTruck, FiUser, FiMail, FiBriefcase, FiBell, FiGlobe, FiSearch } from 'react-icons/fi'
import SidebarItems from '../components/SidebarItems'

export default function Sidebar() {
    const [navSize, changeNavSize] = useState("large")
    return (

        <Flex pos="sticky" left="5" h="100vh" marginTop="2.5vh" w="300px" flexDir="column" className='sidebarBG'>
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems="center"
                mb={4}
            >
                <Flex mt={4} align="center">
                    <Flex flexDir="column" ml={1} display="flex" align="center">
                        <Avatar size="2xl" src="avatar-1.jpg" mt={4} />
                        <Heading as="h2" size="md" className='sidebarUsernameColor' mt={4}>Howard Montecillo</Heading>

                    </Flex>
                </Flex>

                <Flex
                    p="5%"
                    flexDir="column"
                    w="100%"
                    alignItems="flex-start"
                    as="nav"
                >
                    <SidebarItems navSize={navSize} icon={FiUser} title="Profile" />
                    <SidebarItems navSize={navSize} icon={FiGlobe} title="Community" />
                    <SidebarItems navSize={navSize} icon={FiMail} title="Messages" />
                    <SidebarItems navSize={navSize} icon={FiBell} title="Notifications" />
                    <SidebarItems navSize={navSize} icon={FiTruck} title="My Orders" />
                    <SidebarItems navSize={navSize} icon={FiBriefcase} title="My Jobs" />

                </Flex>
            </Flex>

        </Flex>

    )
}


