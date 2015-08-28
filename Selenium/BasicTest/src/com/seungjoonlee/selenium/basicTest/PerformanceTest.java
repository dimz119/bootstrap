package com.seungjoonlee.selenium.basicTest;

import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;


public class PerformanceTest {
	
	@Test
	public void testing() {
		WebDriver driver = new FirefoxDriver();
		//WebDriver driver = new HtmlUnitDriver();
		driver.get("http://www.ebay.com");
		System.out.println(driver.getTitle());
	}
}
