package com.seungjoonlee.testNGExcluded;

import org.testng.annotations.AfterMethod;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class Annotation {
	@BeforeSuite
	public void beforeSuit() {
		// Execute before entire package
		System.out.println("Before Suite Test");
	}
	
	@AfterSuite
	public void afterSuit() {
		// Execute after entire package
		System.out.println("After Suite Test");
	}
	
	@BeforeMethod
	public void beforeMethod() {
		System.out.println("Before each Test");
	}
	
	@BeforeTest
	public void beforeTest() {
		System.out.println("Before Test");
	}
	
	@AfterTest
	public void afterTest() {
		System.out.println("After Test");
	}
	
	@AfterMethod
	public void afterMethod() {
		System.out.println("After each Test");
	}
	
	@Test
	public void test() {
		System.out.println("Test");
	}
	
	@Test
	public void flightBooking() {
		System.out.println("Flight Booking");
	}
}
