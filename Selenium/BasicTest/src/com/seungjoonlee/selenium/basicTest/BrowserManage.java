package com.seungjoonlee.selenium.basicTest;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxBinary;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;

public class BrowserManage {
	public static void main(String[] args) {
		// Firefox Browser Trouble shooting : This happens if you do not install firefox or you have more then two version of FF
//		FirefoxBinary ffBinary = new FirefoxBinary();
//		FirefoxProfile profile = new FirefoxProfile();
//		WebDriver driver = new FirefoxDriver(ffBinary, profile);
		
		// SSL certificate
		FirefoxProfile profile = new FirefoxProfile();
		profile.setAcceptUntrustedCertificates(false);
		
		WebDriver driver = new FirefoxDriver(profile);
		// Implicit way : Maximum wait is 10 secs
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get("http://www.ebay.com");
		
		// Remove Cookie
		driver.manage().deleteAllCookies();
		
		// Maximize Window
		driver.manage().window().maximize();
		
		// Explicit way
		try {
			Thread.sleep(5000L);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
