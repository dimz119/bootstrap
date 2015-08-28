Setup
=====
Download Selenium Client & WebDriver Language Bindings (http://www.seleniumhq.org/download/)
Copy all the selenium library as reference to execute test files

Start Hub
=========
java -jar selenium-server-standalone-2.47.1.jar -role hub

Register the Node to Hub
=========================
java -jar selenium-server-standalone-2.47.1.jar -role webdriver -hub http://localhost:4444/grid/register -port 5566
