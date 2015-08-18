<?php
namespace Company\Product;

use \PDO;

abstract class DatabaseTestCase extends \PHPUnit_Extensions_Database_TestCase
{
    public static $SQLObj;
    public static $isConnected;

    // only instantiate pdo once for test clean-up/fixture load
    static protected $pdo = null;

    // only instantiate PHPUnit_Extensions_Database_DB_IDatabaseConnection once per test
    protected $conn = null;

    public function getConnection()
    {
        if ($this->conn === null) {
            if (self::$pdo == null) {
                self::$pdo = new PDO($GLOBALS['DB_DSN'], $GLOBALS['DB_USER'], $GLOBALS['DB_PASSWD'] );
            }
            $this->conn = $this->createDefaultDBConnection(self::$pdo, $GLOBALS['DB_DBNAME']);
        }

        return $this->conn;
    }

    // only called before the first test of the test case class
    public static function setUpBeforeClass()
    {
    }

    public static function tearDownAfterClass()
    {
        echo "Current Memory Usage : " . number_format((memory_get_usage() / 1024 / 1024)) . " MB / " . ini_get('memory_limit') . "\n";
        if (self::$isConnected == true) {
            self::$SQLObj = null;
            self::$isConnected = false;
        }
        gc_collect_cycles();
    }
}