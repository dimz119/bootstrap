package com.seungjoonlee.selenium.basicTest;

import java.net.MalformedURLException;
import java.net.URL;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

public class SauceLab {
	public static void main(String[] args) {
		DesiredCapabilities dc = DesiredCapabilities.firefox();
		dc.setCapability("version", 5);
		dc.setCapability("platform", "xp");
		
		// http://saucelab_id:access_code@ondemand.saucelabs.com:80/wd/hub
		try {
			WebDriver driver = new RemoteWebDriver(
					new URL("http://joonlee0228:dd7f5c43-1a7a-498a-b664-0a93add63ae6@ondemand.saucelabs.com:80/wd/hub"), 
					dc);
			
			driver.get("http://www.ebay.com");
			System.out.println(driver.getTitle());
		} catch (MalformedURLException e) {
			e.printStackTrace();
		}
	}
}
