package Automation.Training;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class Base 
{
	public static WebDriver driver;
	public static ChromeOptions Options;
	public static WebDriver getDriver()
	{
		System.setProperty("webdriver.chrome.driver", "G://Git repository//Automation Framework Training Backup//Testing_Automation//drivers//chromedriver81.exe");  
		  
		driver = new ChromeDriver();
		
		Options = new ChromeOptions();
		
		Options.setBinary("C://Users//User//AppData//Local//Google//Chrome//Application//chrome.exe");
		
		return driver;
	}
}
