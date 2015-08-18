<?php
namespace Company\Product;

use \PDO;
use Company\Product\DatabaseTestCase;

class DatabaseTestClass extends DatabaseTestCase
{
	public function getDataSet()
    {
        return $this->createMySQLXMLDataSet(__DIR__.'/Fixture/PreloadedData.xml');
    }

    public function getConnection()
    {
        $this->conn = $this->createDefaultDBConnection(new PDO($GLOBALS['DB_DSN_RTB'], $GLOBALS['DB_USER'], $GLOBALS['DB_PASSWD']), $GLOBALS['DB_DBNAME_RTB']);
        return $this->conn;
    }

    public function testReadDatabase() {
        $conn = $this->getConnection()->getConnection();
        $query = $conn->query('SELECT * FROM table');
        $results = $query->fetchAll(PDO::FETCH_CLASS);
        $this->assertEquals(3, count($results));
    }
}