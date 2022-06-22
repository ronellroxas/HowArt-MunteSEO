import { Grid, GridItem, Text, Center, Input, FormControl, FormLabel, Flex, FormErrorMessage, Divider , Button, IconButton, Link } from "@chakra-ui/react"
import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Formik, Field, Form } from 'formik';
import Router from 'next/router';

export default function login() {

    function validateEmail(value) {
        let errorMessage;
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            errorMessage = 'Invalid email address';
        }
        return errorMessage;
    }

    function validatePassword(value) {
        let errorMessage;
        if (value === '') {
            errorMessage = 'Enter a password';
        }
        return errorMessage;
    }

    return (
        <div className="loginOverflow">
            <Formik
                initialValues={{
                    loginEmail: "",
                    loginPassword: "",
                }}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        let data = JSON.parse(JSON.stringify(values, null, 2))
                        console.log(data.loginEmail)
                        console.log(data.loginPassword)
                        if (data.loginEmail == "juandelacruz@gmail.com" && data.loginPassword == "password1234") {
                            Router.push('/')
                        }
                        else {
                            alert("Invalid email or password")
                        }
                        actions.setSubmitting(false)
                    }, 1000)
                }}
            >
            {(props) => (
                <Form>
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
                                width="50px"/>
                        </GridItem>
                        <GridItem colSpan={5} rowSpan={1}>
                            <Text className="loginText loginMargin" align="center">LOG IN</Text>
                        </GridItem>
                        <GridItem className="loginMargin" colSpan={5} rowSpan={1}>
                        <Field name='loginEmail' validate={validateEmail}>
                            {({ field, form }) => (
                            <FormControl isInvalid={form.errors.loginEmail && form.touched.loginEmail}>
                                <FormLabel htmlFor='loginEmail'>Email</FormLabel>
                                <Input {...field} id='loginEmail' placeholder='Email' />
                                <FormErrorMessage>{form.errors.loginEmail}</FormErrorMessage>
                            </FormControl>
                            )}
                        </Field>
                        </GridItem>
                        <GridItem className="loginMargin" colSpan={5} rowSpan={1}>
                            <Field name='loginPassword' validate={validatePassword}>
                                {({ field, form }) => (
                                <FormControl isInvalid={form.errors.loginPassword && form.touched.loginPassword}>
                                    <FormLabel htmlFor='loginPassword'>Password</FormLabel>
                                    <Input {...field} type="password" id='loginPassword' placeholder='Password' />
                                    <FormErrorMessage>{form.errors.loginPassword}</FormErrorMessage>
                                </FormControl>
                                )}
                            </Field>
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
                                <Button id="loginButton" isLoading={props.isSubmitting} type="submit" color="white" fontWeight="bold" bg="#CCA893" w="35%" size='sm'>
                                    Log in
                                </Button>
                            </Center>
                            <Text paddingTop="15px" fontSize="14px" color="#696F79" align="center">Dont have an account yet? <Link fontSize="14px" className="loginUnderline" color="#BC8B6F" href='signup'>Sign up</Link></Text>
                        </GridItem> 
                    </Grid>
                </Form>
            )}
            </Formik>
        </div>      
    )
}