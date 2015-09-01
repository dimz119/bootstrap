package com.seungjoonlee.testNG;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

public class Annotation {
	private String username;
	private String password;
	private String browser;
	
	// FindBy Annotation to get WebElement
	@FindBy(xpath=".//input[@id='email']")
	WebElement email;
	
	@Test
	public void findByAnnotationTest() {
		WebDriver driver = new FirefoxDriver();
		driver.get("http://www.google.com");
		
		// Initialize all the Annotation. This has to be in the constructor
		PageFactory.initElements(driver, this);
		WebElement emailClone = email;
	}
	
	@BeforeSuite
	public void beforeSuit() {
		Properties prop = new Properties();
		try {
			FileInputStream fi = new FileInputStream("/Users/titan/bootstrap/Selenium/TestNG/src/com/seungjoonlee/testNG/Annotation.properties");
			prop.load(fi);
			this.username = prop.getProperty("username");
			this.password = prop.getProperty("password");
			this.browser = prop.getProperty("browser");
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		// Execute before entire package
		System.out.println("Before Suite Test");
	}
	
	@AfterSuite
	public void afterSuit() {
		// Execute after entire package
		System.out.println("After Suite Test");
	}
	
	@BeforeMethod
	public void beforeMethod() {
		System.out.println("Before each Test");
	}
	
	@BeforeTest
	public void beforeTest() {
		System.out.println("Before Test");
	}
	
	@AfterTest
	public void afterTest() {
		System.out.println("After Test");
	}
	
	@AfterMethod
	public void afterMethod() {
		System.out.println("After each Test");
	}
	
	// Group test
	@Test (groups="priority1")
	public void testPriority1() {
		System.out.println("Priority1 Test");
	}
	
	@Test (groups="priority2")
	public void testPriority2() {
		System.out.println("Priority2 Test");
	}
	
	// Get Data from getUserData DataProvider
	@Test (dataProvider="getUserData")
	public void flightBooking(String firstName, String lastName) {
		System.out.println("Flight Booking for " + firstName + " " + lastName);
	}
	
	@DataProvider
	public Object[][] getUserData() {
		// i stands for the # of test iteration
		// j stands for the # of parameter you pass for each test interation
		Object[][] data = new Object[2][2];
		data[0][0] = "Seungjoon";
		data[0][1] = "Lee";
		
		data[1][0] = "Tom";
		data[1][1] = "Park";
		
		return data;
	}
	
	// Read Parameters from XML global variable
	@Test
	@Parameters({"firstName"})
	public void flightBookingWithFirstName(String firstName) {
		System.out.println("Flight Booking for " + firstName);
		
		if (this.browser.contains("firefox")) {
			WebDriver driver = new FirefoxDriver();
			driver.get("http://www.google.com");
		}
	}
}
