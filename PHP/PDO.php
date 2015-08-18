<?php
$host = "hostname.com";
$dbName = "dbName";
$userName = "userName";
$password = "password";
$tableName = "tableName";
$db = new PDO('mysql:host=' . $host . ';dbname=' . $dbName, $userName, $password);
$stmt = $db->prepare("SELECT * FROM $tableName WHERE id=:id");
$stmt->bindValue(':id', 1, PDO::PARAM_INT);
$stmt->execute();
$rows = $stmt->fetchAll(PDO::FETCH_ASSOC);