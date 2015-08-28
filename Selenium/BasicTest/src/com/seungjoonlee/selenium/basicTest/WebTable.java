package com.seungjoonlee.selenium.basicTest;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

public class WebTable {
	public static void main(String[] args) {
		WebDriver driver = new FirefoxDriver();
		driver.get("http://www.espncricinfo.com/ci/engine/match/415281.html");
		WebElement table = driver.findElement(By.className("batting-table"));
		List<WebElement> rows = table.findElements(By.tagName("tr"));
		for(WebElement row : rows) {
			List<WebElement> cols = row.findElements(By.tagName("td"));
			for(WebElement col : cols) {
				System.out.println(col.getText());
			}
		}
	}
}
