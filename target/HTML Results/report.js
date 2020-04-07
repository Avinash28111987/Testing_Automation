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
  "name": "User is on login page with credentials",
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
        "ACNADMFR",
        "ACNADMFR1"
      ],
      "line": 16,
      "id": "login-the-application;login-to-default-homepage;;2"
    },
    {
      "cells": [
        "ACNADMUS",
        "ACNADMUS1"
      ],
      "line": 17,
      "id": "login-the-application;login-to-default-homepage;;3"
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
  "name": "Check if the browser has triggered",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.validate_the_browser()"
});
formatter.result({
  "duration": 157172369,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.the_browser_is_triggered()"
});
formatter.result({
  "duration": 133969,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.check_if_the_browser_has_triggered()"
});
formatter.result({
  "duration": 104956,
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
  "name": "User is on login page with credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User logging in to the application with ACNADMFR and ACNADMFR1",
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
  "location": "stepDefinition.user_is_on_login_page_with_credentials()"
});
formatter.result({
  "duration": 130129,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACNADMFR",
      "offset": 40
    },
    {
      "val": "ACNADMFR1",
      "offset": 53
    }
  ],
  "location": "stepDefinition.user_logging_in_to_the_application_with_and(String,String)"
});
formatter.result({
  "duration": 5814420,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.landing_in_the_Home_page()"
});
formatter.result({
  "duration": 182180,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.logging_to_application_is_validated()"
});
formatter.result({
  "duration": 318283,
  "status": "passed"
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
  "name": "Check if the browser has triggered",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.validate_the_browser()"
});
formatter.result({
  "duration": 148048,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.the_browser_is_triggered()"
});
formatter.result({
  "duration": 177914,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.check_if_the_browser_has_triggered()"
});
formatter.result({
  "duration": 235939,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Login to default homepage",
  "description": "",
  "id": "login-the-application;login-to-default-homepage;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "User is on login page with credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User logging in to the application with ACNADMUS and ACNADMUS1",
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
  "location": "stepDefinition.user_is_on_login_page_with_credentials()"
});
formatter.result({
  "duration": 211193,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACNADMUS",
      "offset": 40
    },
    {
      "val": "ACNADMUS1",
      "offset": 53
    }
  ],
  "location": "stepDefinition.user_logging_in_to_the_application_with_and(String,String)"
});
formatter.result({
  "duration": 528196,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.landing_in_the_Home_page()"
});
formatter.result({
  "duration": 266658,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.logging_to_application_is_validated()"
});
formatter.result({
  "duration": 207353,
  "status": "passed"
});
});