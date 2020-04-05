Feature: Login the application 

Scenario: Login to default homepage
Given User is on login page with credentials
When User logging in to the application with "ACNADMFR" and "ACNADMFR1"
Then Landing in the Home page
And Logging to application is validated


Scenario: Login to default homepage
Given User is on login page with credentials
When User logging in to the application with "AVINASH" and "WRONGPWD"
Then Landing in the Home page
And Logging to application is validated