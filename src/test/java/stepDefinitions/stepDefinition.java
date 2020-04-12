package stepDefinitions;

import org.junit.runner.RunWith;
import org.openqa.selenium.By;

import org.openqa.selenium.WebDriver;

import Automation.Training.Base;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
public class stepDefinition {
	public WebDriver driver;

    @Given("^Application URL is entered$")
    public void application_url_is_entered() throws Throwable {
    	driver = Base.getDriver();
    	driver.get("https://www.phptravels.net/login");
	}

    @When("^User is on login page$")
    public void user_is_on_login_page() throws Throwable {
		System.out.println("Landing on Login page");
	}

    @Then("^User logging in to the application with username and password$")
    public void user_logging_in_to_the_application_with_username_and_password() throws Throwable {
		driver.findElement(By.xpath("//input[@name='username']")).sendKeys("user@phptravels.com");

		driver.findElement(By.xpath("//input[@name='password']")).sendKeys("demouser");

		driver.findElement(By.xpath("//button[contains(text(),'Login')]")).click();

		System.out.println("Logged in the application with valid username and password");
	}

    @Then("^Landing in the Home page$")
    public void landing_in_the_home_page() throws Throwable {
		Thread.sleep(5000);
		System.out.println("Landing on Home page");
	}

    @And("^Logging to application is validated$")
    public void logging_to_application_is_validated() throws Throwable {
		String expected_title = "My Account";
		String actual_title;
		actual_title = driver.getTitle();
		System.out.println(actual_title);
		if (actual_title == expected_title)
		{
			System.out.println("Title of the page validated");
		}
		else
			System.out.println("Title of the page do not match");
	}

}