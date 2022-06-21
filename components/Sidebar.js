import React, { useState } from 'react'
import { Flex, Divider, Avatar, Heading, InputGroup, Input, InputRightElement, Button, Box } from '@chakra-ui/react'
import { FiTruck, FiUser, FiMail, FiBriefcase, FiBell, FiGlobe, FiSearch } from 'react-icons/fi'
import SidebarItems from '../components/SidebarItems'

export default function Sidebar() {

    return (

        <Flex pos="fixed" left="0" minW="280px" flexDir="column" className='sidebarBG' h="100vh" zIndex={99} >
            <Flex p="5%" flexDir="column" w="100%" alignItems="center" mb={4}>
                <Flex mt={4} align="center">
                    <Flex flexDir="column" ml={1} display="flex" align="center">
                        <Avatar size="xl" src="avatar-1.jpg" mt={4} />
                        <Heading as="h2" size="lg" className='sidebarName' mt={4}>Howard Montecillo</Heading>
                        <Heading as="h2" size="lg" className='sidebarUsername' mt={4}>@Howard</Heading>
                    </Flex>
                </Flex>
                <Flex p="5%" flexDir="column" w="100%" alignItems="flex-start" as="nav">
                    <SidebarItems icon={FiUser} title="Profile" />
                    <SidebarItems icon={FiGlobe} title="Community" />
                    <SidebarItems icon={FiMail} title="Messages" />
                    <SidebarItems icon={FiBell} title="Notifications" />
                    <SidebarItems icon={FiTruck} title="My Orders" />
                    <SidebarItems icon={FiBriefcase} title="My Jobs" />
                </Flex>
            </Flex>
        </Flex>

    )
}


