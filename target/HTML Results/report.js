$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login the application",
  "description": "",
  "id": "login-the-application",
  "keyword": "Feature"
});
formatter.before({
  "duration": 727881,
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
formatter.result({
  "duration": 6992455805,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot find Chrome binary\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.0.102\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_65\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00FE5F73+2449267]\n\tOrdinal0 [0x00F18361+1606497]\n\tOrdinal0 [0x00E0F969+522601]\n\tOrdinal0 [0x00D9C7C4+51140]\n\tOrdinal0 [0x00DBC127+180519]\n\tOrdinal0 [0x00DBBF2D+180013]\n\tOrdinal0 [0x00DB9E5B+171611]\n\tOrdinal0 [0x00DA1DD8+73176]\n\tOrdinal0 [0x00DA2E50+77392]\n\tOrdinal0 [0x00DA2DE9+77289]\n\tOrdinal0 [0x00F2D8D7+1693911]\n\tGetHandleVerifier [0x01084036+522726]\n\tGetHandleVerifier [0x01083D74+522020]\n\tGetHandleVerifier [0x01099187+609079]\n\tGetHandleVerifier [0x010848A6+524886]\n\tOrdinal0 [0x00F25CBC+1662140]\n\tOrdinal0 [0x00F2F23B+1700411]\n\tOrdinal0 [0x00F2F3A3+1700771]\n\tOrdinal0 [0x00F45215+1790485]\n\tBaseThreadInitThunk [0x76803677+18]\n\tRtlInitializeExceptionChain [0x777A9D72+99]\n\tRtlInitializeExceptionChain [0x777A9D45+54]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat Automation.Training.Base.getDriver(Base.java:13)\r\n\tat stepDefinitions.stepDefinition.application_url_is_entered(stepDefinition.java:21)\r\n\tat ✽.Given Application URL is entered(Login.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepDefinition.user_is_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.user_logging_in_to_the_application_with_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.landing_in_the_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.logging_to_application_is_validated()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 190717,
  "status": "passed"
});
});