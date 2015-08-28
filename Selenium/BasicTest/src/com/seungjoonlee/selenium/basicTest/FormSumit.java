package com.seungjoonlee.selenium.basicTest;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;

public class FormSumit {
	public static void main(String[] args) {
		WebDriver driver = new FirefoxDriver();
//		driver.get("http://www.spicejet.com");
		
		// Dynamic DropDown
//		driver.findElement(By.xpath(".//*[@id='ctl00_mainContent_ddl_originStation1_CTXT']")).click();
//		driver.findElement(By.xpath("//a[@value='GOI']")).click();
	
		// Select static DropDown
//		Select dropdown = new Select(driver.findElement(By.xpath(".//*[@id='ctl00_mainContent_ddl_Adult']")));
//		dropdown.selectByIndex(4);
//		dropdown.selectByVisibleText("9 Adults");
//		dropdown.selectByValue("8");
		
		// Checkbox
//		driver.findElement(By.xpath(".//*[@id='ctl00_mainContent_chk_IndArm']")).click();
//		System.out.println(driver.findElement(By.xpath(".//*[@id='ctl00_mainContent_chk_IndArm']")).isSelected());
		
		// Radio Button
//		driver.get("http://www.echoecho.com/htmlforms10.htm");
//		driver.findElement(By.xpath("//input[@value='Milk']")).click();
//		int count = driver.findElements(By.xpath("//input[@name='group1']")).size();
//		
//		for(int i=0;i<count;i++) {
//			System.out.println(driver.findElements(By.xpath("//input[@name='group1']")).get(i).getAttribute("value"));
//		}
		
		// Alert
//		driver.get("http://www.tizag.com/javascriptT/javascriptalert.php");
//		driver.findElement(By.xpath("html/body/table[3]/tbody/tr[1]/td[2]/table/tbody/tr/td/div[4]/form/input")).click();
//		System.out.println(driver.switchTo().alert().getText());
//		driver.switchTo().alert().sendKeys("SEND THIS KEY");
//		driver.switchTo().alert().accept(); // Accept - Positive Scenario
//		driver.switchTo().alert().dismiss(); // Dismiss - Negative Scenario
		
		// DOM validation
		driver.get("http://www.makemytrip.com");
		Assert.assertTrue(driver.findElement(By.xpath(".//*[@id='return_date_sec']")).isDisplayed());
//		System.out.println("Before Click Multiple");
//		System.out.println(driver.findElement(By.xpath(".//*[@id='return_date_sec']")).isDisplayed()); // DOM element has to be existed with hidden
//		driver.findElement(By.xpath(".//*[@id='multi_city_button']")).click();
//		System.out.println("After Click Multiple");
//		System.out.println(driver.findElement(By.xpath(".//*[@id='return_date_sec']")).isDisplayed());
		
		// Check if the DOM element exists
//		int count = driver.findElements(By.xpath(".//*[@id='multi_city_button']")).size();
//		System.out.println(driver.findElement(By.xpath(".//*[@id='multi_city_button']")).isEnabled()); // Enable mode
//		if (count > 0) {
//			System.out.println("DOM element exists");
//		} else {
//			System.out.println("DOM element does not exist");
//		}
		
		// Wait 3 secs
//		try {
//			Thread.sleep(3000L);
//		} catch (InterruptedException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
		
		// While + Click
//		int j = 0;
//		while(j<5) {
//			driver.findElement(By.xpath(".//*[@id='adult_count']/a[2]")).click();
//			j++;
//		}
	}
}
