Feature: Login the application

Scenario: Login to default homepage
Given User is on login page
When User logging in to the application with username and password
Then Landing in the Home page
And Home page loading is completed