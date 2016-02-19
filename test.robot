*** Variables ***

${HOSTNAME}             127.0.0.1
${PORT}                 80
${SERVER}               http://${HOSTNAME}:${PORT}/
${BROWSER}              firefox


*** Settings ***

Documentation   Webpack Starter Angular Acceptance Tests
Library         Selenium2Library  timeout=10  implicit_wait=0
Suite Setup     Open Browser  ${SERVER}  ${BROWSER}
Suite Teardown  Close Browser


*** Keywords ***


*** Test Cases ***

Webserver Setup
  Go To  ${SERVER}
  Wait until page contains  Webpack Starter
  Page Should Contain  Webpack Starter
