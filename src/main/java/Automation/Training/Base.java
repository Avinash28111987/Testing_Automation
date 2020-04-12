package Automation.Training;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Base 
{
	public static WebDriver driver;
	public static WebDriver getDriver()
	{
		System.setProperty("webdriver.chrome.driver", "G://Git repository//Automation Framework Training Backup//Testing_Automation//drivers//chromedriver81.exe");  
		  
		driver = new ChromeDriver();
		
		return driver;
	}
}
