package com.seungjoonlee.selenium.basicTest;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

public class Action {
	public static void main(String[] args) {
		WebDriver driver = new FirefoxDriver();
		driver.get("http://www.amazon.com");
		Actions act = new Actions(driver);
//		WebElement signInElement = driver.findElement(By.xpath(".//*[@id='nav-link-yourAccount']"));
//		act.moveToElement(signInElement).build().perform();
		
		WebElement searchElement = driver.findElement(By.xpath(".//*[@id='twotabsearchtextbox']"));
		// Capitalized Search Text
		act.keyDown(Keys.SHIFT).moveToElement(searchElement).sendKeys("echo").build().perform();
		
		// Mouse Right Click
		act.contextClick(searchElement).build().perform();
	}
}
