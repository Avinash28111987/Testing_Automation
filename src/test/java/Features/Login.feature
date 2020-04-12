Feature: Login the application 

@Seleniumtest
Scenario: Login to default homepage
Given Application URL is entered
When User is on login page
Then User logging in to the application with username and password
Then Landing in the Home page
And Logging to application is validated