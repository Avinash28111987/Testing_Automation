package login_stepDefinitions;

import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.PageLoadStrategy;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;



@RunWith(Cucumber.class)
public class stepDefinition 
{
	public WebDriver driver;
	 
	  @Given("^Validate the Browser$")
	    public void validate_the_browser() throws Throwable 
	  	{
		  
		  
		  System.setProperty("webdriver.chrome.driver", "G://Git repository//Automation Framework Training Backup//Testing_Automation//drivers//chromedriver81.exe");  
		  
		  driver = new ChromeDriver();
		  
		  driver.get("https://www.phptravels.net/login");
		  
		  ChromeOptions options = new ChromeOptions();
		  options.setPageLoadStrategy(PageLoadStrategy.NONE);
		  
		  System.out.println("choose the browser");
		  
	    }

	    @When("^The browser is triggered$")
	    public void the_browser_is_triggered() throws Throwable 
	    {
	    	
	    	System.out.println("Browser is triggered");
	        
	    }

	    @Then("^Check if the browser has triggered and closed$")
	    public void check_if_the_browser_has_triggered_and_closed() throws Throwable 
	    {
	    	
	    	
	    	System.out.println("Browser triggered successfully");
	    	
	    }
	
	
	    @Given("^User is on login page$")
	    public void user_is_on_login_page() throws Throwable 
	    {
		
	    	System.out.println("Landing on Login page");
	 
	    }

	    @When("^User logging in to the application with (.+) and (.+)$")
	    public void user_logging_in_to_the_application_with_and(String username, String password) throws Throwable 
	    {
	    	driver.findElement(By.xpath("//input[@name='username']")).sendKeys(username);
	    	
	    	driver.findElement(By.xpath("//input[@name='password']")).sendKeys(password);
	    	
	    	driver.findElement(By.xpath("//button[contains(text(),'Login')]")).click();
	    	
	    	System.out.println("Logged in the application with valid username and password");
		
	    }

	    @Then("^Landing in the Home page$")
	    public void landing_in_the_Home_page() throws Throwable 
	    {
	    	
	    	driver.wait(10000);
	    	System.out.println("Landing on Home page");
		
	    }

	    @And("^Logging to application is validated$")
	    public void logging_to_application_is_validated() throws Throwable 
	    {
	    	driver.close();
	 
	    	System.out.println("Home page loading is complete");
		
	    }

}