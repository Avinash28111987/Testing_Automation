package stepDefinitions;

import org.openqa.selenium.WebDriver;

import Automation.Training.Base;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends Base {
	public WebDriver driver;
	@Before("@Seleniumtest")
	public void Browser_startup() 
	{
		System.out.println("execution started");
	}

	@After("@Seleniumtest")
	public void tear_down() 
	{

		//Base.driver.close();
		System.out.println("execution completed");
	}

}
