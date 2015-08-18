<?php
use PDO;

class Lock
{
    private $pdo;

    public function __construct(PDO $pdo)
    {
        $this->pdo = $pdo;
    }

    /**
     * acquire a lock
     *
     * @param string $name
     * @param int $timeout
     * @return boolean
     * @throws RuntimeException on error
     */
    public function acquire($name, $timeout = 1)
    {
        $select = $this->pdo->prepare('SELECT GET_LOCK(?, ?)');
        $select->execute(array($name, (int) $timeout));
        $result = $select->fetchColumn();
        if ('1' === $result) {
            return true;
        }
        if ('0' === $result) {
            return false;
        }
        throw new RuntimeException(sprintf('Error occured while obtaining lock "%s"', $name));
    }

    /**
     * release the lock
     *
     * @param string $name
     * @return void
     * @throws RuntimeException on error
     */
    public function release($name)
    {
        $select = $this->pdo->prepare('SELECT RELEASE_LOCK(?)');
        $select->execute(array($name));
        $result = $select->fetchColumn();
        if ('1' === $result) {
            return;
        }
        if ('0' === $result) {
            throw new RuntimeException(sprintf('Can not realease lock "%s"', $name));
        }
        throw new RuntimeException(sprintf('Lock "%s" does not exist', $name));
    }
}
