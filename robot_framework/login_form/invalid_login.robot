*** Settings ***
Documentation      A test suite with a single test for an invalid login
...
...                This test has a workflow that is created using keywords
...                directly from SeleniumLibrary
Resource           resource.robot

*** Test Cases ***
Invalid Email Login
    Open Browser to Login Page
    Input Email in Login                    ${INVALID EMAIL}
    Input Password in Login                 ${VALID PASSWORD}
    Click Login Button
    Email Should Be Invalid
    Close Browser


Wrong Email Login
    Open Browser to Login Page
    Input Email in Login                    ${WRONG EMAIL}
    Input Password in Login                 ${VALID PASSWORD}
    Click Login Button
    Login Should Have Failed
    Close Browser


Wrong Password Login
    Open Browser to Login Page
    Input Email in Login                    ${VALID EMAIL}
    Input Password in Login                 ${WRONG PASSWORD}
    Click Login Button
    Login Should Have Failed
    Close Browser


Wrong Email and Password Login
    Open Browser to Login Page
    Input Email in Login                    ${WRONG EMAIL}
    Input Password in Login                 ${WRONG PASSWORD}
    Click Login Button
    Login Should Have Failed
    Close Browser


Missing Both Credentials Login
    Open Browser to Login Page
    Input Email in Login                    ${NULL EMAIL}
    Input Password in Login                 ${NULL PASSWORD}
    Click Login Button
    Email Should Be Invalid
    Password Should Be Invalid
    Close Browser


Missing Email Login
    Open Browser to Login Page
    Input Email in Login                    ${NULL EMAIL}
    Input Password in Login                 ${VALID PASSWORD}
    Click Login Button
    Email Should Be Invalid
    Close Browser

Missing Password Login
    Open Browser to Login Page
    Input Email in Login                    ${VALID EMAIL}
    Input Password in Login                 ${NULL PASSWORD}
    Click Login Button
    Password Should Be Invalid
    Close Browser
