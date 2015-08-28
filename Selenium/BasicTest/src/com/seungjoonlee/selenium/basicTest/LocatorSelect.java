package com.seungjoonlee.selenium.basicTest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class LocatorSelect {
	public static void main(String[] args) {
		WebDriver driver = new FirefoxDriver();
		
		driver.get("http://www.facebook.com");
		
		// Find with CSS
//		driver.findElement(By.cssSelector("#Login"));
		
		// Find XPath
//		driver.findElement(By.xpath("//input[@id='email']")).sendKeys("USERNAME");
//		driver.findElement(By.xpath("//input[@id='u_0_x']")).click();
		
		// Find Link
//		driver.findElement(By.linkText("Forgot your password?")).click();
		
//		driver.findElement(By.id("email")).sendKeys("USERNAME");
//		driver.findElement(By.id("pass")).sendKeys("PASSWORD");
//		driver.findElement(By.id("u_0_x")).click();
		
//		driver.get("http://qaclickacademy.com");
//		driver.findElement(By.xpath(".//*[@id='newsletter-form']/div/div[3]/button")).click();
	}
}
