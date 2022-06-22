*** Settings ***
Documentation      A test suite with a single test for a valid login
...
...                This test has a workflow that is created using keywords
...                directly from SeleniumLibrary
Resource           resource.robot

*** Test Cases ***
Valid Login with Email
    Open Browser to Login Page
    Location Should Be                      ${LOGIN URL}
    Input Email in Login                    ${VALID EMAIL}
    Input Password in Login                 ${VALID PASSWORD}
    Click Login Button
    Alert Should Not Be Present
    Close Browser