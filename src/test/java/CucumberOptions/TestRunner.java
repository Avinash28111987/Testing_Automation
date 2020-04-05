package CucumberOptions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "G:/Git repository/Automation Framework Training Backup/Testing_Automation/src/test/java/Features", glue="login_stepDefinitions")
public class TestRunner 
{

	
	
}
