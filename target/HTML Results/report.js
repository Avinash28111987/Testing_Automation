$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login the application",
  "description": "",
  "id": "login-the-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Login to default homepage",
  "description": "",
  "id": "login-the-application;login-to-default-homepage",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User logging in to the application with \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Landing in the Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Logging to application is validated",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "login-the-application;login-to-default-homepage;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 15,
      "id": "login-the-application;login-to-default-homepage;;1"
    },
    {
      "cells": [
        "user@phptravels.com",
        "demouser"
      ],
      "line": 16,
      "id": "login-the-application;login-to-default-homepage;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Validate the Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "The browser is triggered",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Check if the browser has triggered and closed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.validate_the_browser()"
});
formatter.result({
  "duration": 13016137118,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.the_browser_is_triggered()"
});
formatter.result({
  "duration": 9785864,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.check_if_the_browser_has_triggered_and_closed()"
});
formatter.result({
  "duration": 237223,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Login to default homepage",
  "description": "",
  "id": "login-the-application;login-to-default-homepage;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User logging in to the application with user@phptravels.com and demouser",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Landing in the Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Logging to application is validated",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.user_is_on_login_page()"
});
formatter.result({
  "duration": 169810,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user@phptravels.com",
      "offset": 40
    },
    {
      "val": "demouser",
      "offset": 64
    }
  ],
  "location": "stepDefinition.user_logging_in_to_the_application_with_and(String,String)"
});
formatter.result({
  "duration": 1252766781,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.landing_in_the_Home_page()"
});
formatter.result({
  "duration": 191144,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.logging_to_application_is_validated()"
});
formatter.result({
  "duration": 2145717469,
  "status": "passed"
});
});