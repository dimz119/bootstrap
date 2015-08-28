package com.seungjoonlee.selenium.basicTest;

import java.io.File;
import java.net.MalformedURLException;
import java.net.URL;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

public class RemoteGrid {
	public static void main(String[] args) {
		DesiredCapabilities capabilities = DesiredCapabilities.firefox();
		// The Location of FireFox in Node
		capabilities.setCapability(FirefoxDriver.BINARY, new File("/Applications/Firefox.app/Contents/MacOS/firefox-bin").getAbsolutePath());
		
		WebDriver driver;
		try {
			// Node information
			driver = new RemoteWebDriver(new URL("http://localhost:5566/wd/hub"), capabilities);
			
			// Run in the Node
			driver.get("http://www.google.com");
			System.out.println(driver.getTitle());
		} catch (MalformedURLException e) {
			e.printStackTrace();
		}
		
		
	}
}
