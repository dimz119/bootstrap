package com.seungjoonlee.testNGExcluded;

import org.testng.annotations.Test;

public class DependencyAnnotation {
	// Test fails if it pass 5 sec to be tested
	@Test (timeOut=5000)
	public void test() {
		System.out.println("Test");
	}
	
	// Regardless of "test", always run
	@Test (dependsOnMethods={"test"}, alwaysRun=true)
	public void flightBooking() {
		System.out.println("Flight Booking");
	}
	
	@Test (enabled=false)
	public void noTest() {
		System.out.println("Test");
	}
}
