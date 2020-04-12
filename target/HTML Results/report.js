$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login the application",
  "description": "",
  "id": "login-the-application",
  "keyword": "Feature"
});
formatter.before({
  "duration": 320422,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login to default homepage",
  "description": "",
  "id": "login-the-application;login-to-default-homepage",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Seleniumtest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Application URL is entered",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User is on login page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User logging in to the application with username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Landing in the Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Logging to application is validated",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.application_url_is_entered()"
});
