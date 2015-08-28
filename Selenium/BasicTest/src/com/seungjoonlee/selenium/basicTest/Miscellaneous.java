package com.seungjoonlee.selenium.basicTest;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.os.WindowsUtils;

public class Miscellaneous {

	public static void main(String[] args) {
		// Windows machine related
		// WindowsUtils.tryToKillByName("notepad.exe");
		FirefoxDriver driver = new FirefoxDriver();
		driver.get("http://www.google.com");
		
		// Screenshot
		File scrFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		try {
			FileUtils.copyFile(scrFile, new File("PATH_TO_SCREENSHOT.png"));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
