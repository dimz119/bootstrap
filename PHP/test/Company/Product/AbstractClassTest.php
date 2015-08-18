<?php
namespace Company\Product;

class AbstractClass extends \PHPUnit_Framework_TestCase
{
	public function testConcreteMethod()
	{
		$mock = $this->getMockForTrait('Company\Product\AbstractTrait');

        $mock->expects($this->any())
             ->method('abstractMethod')
             ->will($this->returnValue(TRUE));

        $this->assertTrue($mock->concreteMethod());
	}
}