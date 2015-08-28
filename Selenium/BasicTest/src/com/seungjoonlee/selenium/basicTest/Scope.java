package com.seungjoonlee.selenium.basicTest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.Assert;

public class Scope {

	public static void main(String[] args) {
		WebDriver driver = new FirefoxDriver();
		driver.get("https://www.ebay.com");
		System.out.println(driver.findElements(By.tagName("a")).size());
		WebElement footer = driver.findElement(By.xpath(".//*[@id='glbfooter']"));
		System.out.println(footer.findElements(By.tagName("a")).size());
		
		WebElement col = driver.findElement(By.xpath(".//*[@id='gf-BIG']/table/tbody/tr/td[2]/ul"));
		int colSize = col.findElements(By.tagName("a")).size();
		String previousTitle = "";
		for(int i = 0; i < colSize; i++) {
//			System.out.println(col.findElements(By.tagName("a")).get(i).getText());
			previousTitle = driver.getTitle();
			if (col.findElements(By.tagName("a")).get(i).getText().contains("Site map")) {
				col.findElements(By.tagName("a")).get(i).click();
				break;
			}
		}
		
		String postTitle = driver.getTitle();
		
		Assert.assertFalse(postTitle.equals(previousTitle));
	}

}
