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

    @Given("^User is on login page$")
    public void user_is_on_login_page() throws Throwable 
    {
        System.out.println("Landing on Login page");
    }

    @When("^User logging in to the application with username and password$")
    public void user_logging_in_to_the_application_with_username_and_password() throws Throwable 
    {
    	System.out.println("Logged in the application with valid username and password");
    }

    @Then("^Landing in the Home page$")
    public void landing_in_the_home_page() throws Throwable 
    {
    	System.out.println("Landing on Home page");
    }

    @And("^Home page loading is completed$")
    public void home_page_loading_is_completed() throws Throwable 
    {
    	System.out.println("Home page loading is complete");
    }

}