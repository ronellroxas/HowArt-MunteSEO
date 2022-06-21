import { Grid, GridItem, Text, Center, Input, FormControl, FormLabel, Flex, FormErrorMessage, Divider , Button, IconButton, Link } from "@chakra-ui/react"
import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import Router from 'next/router';

export default function signup() {

    function validateEmail(value) {
        let errorMessage;
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            errorMessage = 'Invalid email address';
        }
        return errorMessage;
    }

    function validateField(value) {
        let errorMessage;
        if (value === '') {
            errorMessage = 'Enter a password';
        }
        return errorMessage;
    }

    function submitForm(values, actions) {
        let submitUser = async () => {
            let response = await axios.post('http://localhost:8000/user', values);

            console.log(response);
            if (response.status == 201) return response.data;
            else return null;
        }

        let data = submitUser();

        if (data == null) {
            actions.isValidating(false);
            actions.isSubmitting(false);
            
        }
        else Router.push('/login');


        
    } 

    return (
        <div className="loginOverflow">
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    username: "",
                    firstName: "",
                    lastName: ""
                }}
                onSubmit={(values, actions) => submitForm(values, actions)}
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
                                height="100vh"
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
                            <Text className="loginText loginMargin" align="center">SIGN UP</Text>
                        </GridItem>
                        <GridItem className="loginMargin" colSpan={5} rowSpan={1}>
                        <Field name='username' validate={validateField}>
                            {({ field, form }) => (
                            <FormControl isInvalid={form.errors.username && form.touched.username}>
                                <FormLabel htmlFor='username'>Username</FormLabel>
                                <Input {...field} id='username' placeholder='Username' />
                                <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                            </FormControl>
                            )}
                        </Field>
                        </GridItem>
                        <GridItem className="loginMargin" colSpan={5} rowSpan={1}>
                            <Field name='email' validate={validateEmail}>
                                {({ field, form }) => (
                                <FormControl isInvalid={form.errors.email && form.touched.email}>
                                    <FormLabel htmlFor='email'>Email</FormLabel>
                                    <Input {...field} id='email' placeholder='Email Address' />
                                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                </FormControl>
                                )}
                            </Field>
                        </GridItem>
                        <GridItem className="loginMargin" colSpan={5} rowSpan={1}>
                            <Field name='password' validate={validateField}>
                                {({ field, form }) => (
                                <FormControl isInvalid={form.errors.password && form.touched.password}>
                                    <FormLabel htmlFor='password'>Password</FormLabel>
                                    <Input {...field} id='password' placeholder='Password' />
                                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                                </FormControl>
                                )}
                            </Field>
                        </GridItem>
                        <GridItem className="loginMargin" colSpan={5} rowSpan={1}>
                            <Field name='firstName' validate={validateField}>
                                {({ field, form }) => (
                                <FormControl isInvalid={form.errors.firstName && form.touched.firstName}>
                                    <FormLabel htmlFor='firstName'>First Name</FormLabel>
                                    <Input {...field} id='firstName' placeholder='First Name' />
                                    <FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
                                </FormControl>
                                )}
                            </Field>
                        </GridItem>
                        <GridItem className="loginMargin" colSpan={5} rowSpan={1}>
                            <Field name='lastName' validate={validateField}>
                                {({ field, form }) => (
                                <FormControl isInvalid={form.errors.lastName && form.touched.lastName}>
                                    <FormLabel htmlFor='lastName'>Last Name</FormLabel>
                                    <Input {...field} id='lastName' placeholder='Last Name' />
                                    <FormErrorMessage>{form.errors.lastName}</FormErrorMessage>
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
                            <Text paddingTop="15px" fontSize="14px" color="#696F79" align="center">Already have an account? <Link fontSize="14px" className="loginUnderline" color="#BC8B6F" href='login'>Log in</Link></Text>
                        </GridItem> 
                    </Grid>
                </Form>
            )}
            </Formik>
        </div>      
    )
}