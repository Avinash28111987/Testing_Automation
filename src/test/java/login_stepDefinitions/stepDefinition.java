package login_stepDefinitions;

import org.junit.runner.RunWith;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
public class stepDefinition 
{
	
	  @Given("^Validate the Browser$")
	    public void validate_the_browser() throws Throwable 
	  	{

		  System.out.println("choose the browser");

	    }

	    @When("^The browser is triggered$")
	    public void the_browser_is_triggered() throws Throwable 
	    {
	    	
	    	System.out.println("Browser is triggered");
	        
	    }

	    @Then("^Check if the browser has triggered$")
	    public void check_if_the_browser_has_triggered() throws Throwable 
	    {
	    	
	    	System.out.println("Browser triggered successfully");
	    	
	    }
	
	
	@Given("^User is on login page with credentials$")
	public void user_is_on_login_page_with_credentials() throws Throwable 
	{
		
		System.out.println("Landing on Login page");
	 
	}

	@When("^User logging in to the application with (.+) and (.+)$")
    public void user_logging_in_to_the_application_with_and(String username, String password) throws Throwable 
	{
		System.out.println(username);
    	System.out.println(password);
    	System.out.println("Logged in the application with valid username and password");
		
	}

	@Then("^Landing in the Home page$")
	public void landing_in_the_Home_page() throws Throwable 
	{
		
		System.out.println("Landing on Home page");
		
	}

	@And("^Logging to application is validated$")
	public void logging_to_application_is_validated() throws Throwable 
	{
	 
		System.out.println("Home page loading is complete");
		
	}

}