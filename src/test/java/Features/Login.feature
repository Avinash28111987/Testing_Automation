Feature: Login the application 

Background:
Given Validate the Browser
When The browser is triggered
Then Check if the browser has triggered and closed

Scenario Outline: Login to default homepage
Given User is on login page
When User logging in to the application with <username> and <password>
Then Landing in the Home page
And Logging to application is validated

Examples:
| username | password | 
| user@phptravels.com | demouser |