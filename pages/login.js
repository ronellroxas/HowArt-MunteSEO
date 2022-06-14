import { Grid, GridItem, Text, Center, Input, FormControl, FormLabel, Flex, FormErrorMessage, FormHelperText, Divider , Button, IconButton, Link } from "@chakra-ui/react"
import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import React, { useState } from 'react';

export default function login() {
    const [inputEmail, setEmail] = useState('')
    const handleEmailChange = (e) => setEmail(e.target.value)
    const isEmailError = inputEmail === ''
    const [inputPassword, setPassword] = useState('')
    const handlePasswordChange = (e) => setPassword(e.target.value)
    const isPasswordError = inputPassword === ''

    return (
        <div className="loginOverflow">
            <Grid 
            h="100vh"
            templateColumns="repeat(11, 1fr)"
            templateRows="repeat(8, 1fr)"
            >
                <GridItem colSpan={6} rowSpan={10}>
                    <img
                        src="/loginImage.png" 
                        alt="login image" 
                        height="100%"
                        width="100%"
                    />
                </GridItem>
                <GridItem colSpan={5} rowSpan={1}>
                    <img 
                        className="loginPadding" 
                        src="howartMunteseo.png" 
                        alt="howartMunteseo image" 
                        height="50px" 
                        width="50px"
                    />
                </GridItem>
                <GridItem colSpan={5} rowSpan={1}>
                    <Text className="loginText loginMargin" align="center">LOG IN</Text>
                </GridItem>
                <GridItem className="loginMargin" colSpan={5} rowSpan={1}>
                    <FormControl isInvalid={isEmailError}>
                        <FormLabel className="loginFontColor fontStylePoppins" htmlFor="loginEmail">Email</FormLabel>
                        <Input 
                            id="loginEmail" 
                            className="smallText fontStylePoppins" 
                            placeholder="" 
                            size="lg"
                            type="email"
                            value={inputEmail}
                            onChange={handleEmailChange}
                        />
                        {!isEmailError ? (
                            <FormHelperText>
                            Enter your email.
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage>
                            Invalid email.
                            </FormErrorMessage>
                        )}
                    </FormControl>
                </GridItem>
                <GridItem className="loginMargin" colSpan={5} rowSpan={1}>
                    <FormControl isInvalid={isPasswordError}>
                        <FormLabel className="loginFontColor fontStylePoppins" htmlFor="loginPassword">Password</FormLabel>
                            <Input 
                                id="loginPassword" 
                                type="password"
                                className="smallText fontStylePoppins" 
                                placeholder="Password" 
                                size="lg" 
                                value={inputPassword}
                                onChange={handlePasswordChange}
                            />
                            {!isPasswordError ? (
                                <FormHelperText>
                                Enter your password.
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage>Password is required.</FormErrorMessage>
                            )}
                    </FormControl>
                </GridItem>
                <GridItem className="loginMargin" colSpan={5} rowSpan={1}>
                <Flex align="center">
                    <Divider />
                        <Text className="loginDivider" padding="5">Or</Text>
                    <Divider />
                </Flex>
                </GridItem>
                <GridItem colSpan={5} rowSpan={1}>
                    <Center>
                        <IconContext.Provider value={{size:28}}>
                            <IconButton id="loginGoogle" className="loginIconButton" aria-label='loginGoogle' height="50px" width="50px" icon={<FcGoogle />} />
                        </IconContext.Provider>
                        <IconContext.Provider value={{size:28, color:"#0E76A8"}}>
                            <IconButton id="loginLinkedin" className="loginIconButton" aria-label='loginLinkedin' height="50px" width="50px" icon={<FaLinkedinIn />} />
                        </IconContext.Provider>
                    </Center>
                </GridItem>
                <GridItem colSpan={5} rowSpan={1}>
                    <Center>
                        <Button id="loginButton" color="white" fontWeight="bold" bg="#CCA893" w="35%" size='sm'>
                            Log in
                        </Button>
                    </Center>
                    <Text paddingTop="15px" fontSize="14px" color="#696F79" align="center">Dont have an account yet? <Link fontSize="14px" className="loginUnderline" color="#BC8B6F" href='signup'>Sign up</Link></Text>
                </GridItem>
            </Grid>
        </div>      
    )
}