import { Grid, GridItem, Text, Center, Input, FormControl, FormLabel, Flex, FormErrorMessage, Divider , Button, IconButton, Link } from "@chakra-ui/react"
import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Formik, Field, Form } from 'formik';

export default function signup() {

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
                    signupEmail: "",
                    signupPassword: "",
                }}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2))
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
                            <Text className="loginText loginMargin" align="center">SIGN UP</Text>
                        </GridItem>
                        <GridItem className="loginMargin" colSpan={5} rowSpan={1}>
                        <Field name='signupEmail' validate={validateEmail}>
                            {({ field, form }) => (
                            <FormControl isInvalid={form.errors.signupEmail && form.touched.signupEmail}>
                                <FormLabel htmlFor='signupEmail'>Email</FormLabel>
                                <Input {...field} id='signupEmail' placeholder='Email' />
                                <FormErrorMessage>{form.errors.signupEmail}</FormErrorMessage>
                            </FormControl>
                            )}
                        </Field>
                        </GridItem>
                        <GridItem className="loginMargin" colSpan={5} rowSpan={1}>
                            <Field name='signupPassword' validate={validatePassword}>
                                {({ field, form }) => (
                                <FormControl isInvalid={form.errors.signupPassword && form.touched.signupPassword}>
                                    <FormLabel htmlFor='signupPassword'>Password</FormLabel>
                                    <Input {...field} id='signupPassword' placeholder='Password' />
                                    <FormErrorMessage>{form.errors.signupPassword}</FormErrorMessage>
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
                                    <IconButton id="signupGoogle" className="loginIconButton" aria-label='signupGoogle' height="50px" width="50px" icon={<FcGoogle />} />
                                </IconContext.Provider>
                                <IconContext.Provider value={{size:28, color:"#0E76A8"}}>
                                    <IconButton id="signupLinkedin" className="loginIconButton" aria-label='signupLinkedin' height="50px" width="50px" icon={<FaLinkedinIn />} />
                                </IconContext.Provider>
                            </Center>
                        </GridItem>
                        <GridItem colSpan={5} rowSpan={1}>
                            <Center>
                                <Button id="signupButton" isLoading={props.isSubmitting} type="submit" color="white" fontWeight="bold" bg="#CCA893" w="35%" size='sm'>
                                    Sign up
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