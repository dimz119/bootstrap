Start Hub
=========
java -jar selenium-server-standalone-2.47.1.jar -role hub

Register the Node to Hub
=========================
java -jar selenium-server-standalone-2.47.1.jar -role webdriver -hub http://localhost:4444/grid/register -port 5566