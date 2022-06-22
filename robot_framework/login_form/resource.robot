*** Settings ***
Documentation      A test suite for login
...
...                This test has a workflow that is created using keywords
...                directly from SeleniumLibrary
Library            SeleniumLibrary

*** Variables ***
${SERVER}                localhost:3000
${BROWSER}               Chrome
${DELAY}                 2
${VALID EMAIL}           juandelacruz@gmail.com
${VALID PASSWORD}        password1234
${INVALID EMAIL}         juandcgmail.com
${WRONG EMAIL}           juandc@gmail.com
${WRONG PASSWORD}        pass1234
${NULL EMAIL}
${NULL PASSWORD}
${HOME URL}              http://${SERVER} 
${LOGIN URL}              http://${SERVER}/login

*** Keywords ***
Open Browser to Login Page
    Open Browser                    ${HOME URL}        ${BROWSER}
    Maximize Browser Window
    Login Page Should Be Open

Login Page Should Be Open
    Page Should Contain Element     class:loginText

Home Page Should Be Open
    Set Selenium Speed              ${DELAY}
    Page Should Not Contain Element     class:loginText

Input Email in Login
    [Arguments]        ${email}
    Input Text                      id:loginEmail           ${email}

Input Password in Login
    [Arguments]        ${password}
    Input Text                     id:loginPassword             ${password}

Click Login Button
    Click Button                    id:loginButton

Login Should Have Succeeded
    Home Page Should Be Open

Login Should Have Failed
    Alert Should Be Present         Invalid email or password

Email Should Be Invalid
    Page Should Contain Element     id=field-:R295sm:-feedback
    Element Text Should Be          id=field-:R295sm:-feedback                  Invalid email address

Password Should Be Invalid
    Page Should Contain Element     id=field-:R2b5sm:-feedback
    Element Text Should Be          id=field-:R2b5sm:-feedback                  Enter a password
    