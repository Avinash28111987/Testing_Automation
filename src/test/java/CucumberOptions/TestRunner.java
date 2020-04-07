package CucumberOptions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "G:/Git repository/Automation Framework Training Backup/Testing_Automation/src/test/java/Features", 
glue="login_stepDefinitions", monochrome= true, dryRun= false, strict= false,
plugin= {"pretty", "html:G:/Git repository/Automation Framework Training Backup/Testing_Automation/target/HTML Results", 
		"json:G:/Git repository/Automation Framework Training Backup/Testing_Automation/target/JSON Result/Cucumber.json",
		"junit:G:/Git repository/Automation Framework Training Backup/Testing_Automation/target/XML Result/junitreport.xml"})
public class TestRunner 
{

	
	
}
