<?php
namespace Company\Product;

class SomeClassTest extends \PHPUnit_Framework_TestCase
{
	public function testStub()
	{
		// Create a stub for the SomeClass class.
        $stub = $this->getMockBuilder('Company\Product\SomeClass')
                     ->getMock();

        // Configure the stub.
        $stub->method('doSomething')
             ->willReturn('foo');

        // Calling $stub->doSomething() will now return
        // 'foo'.
        $this->assertEquals('foo', $stub->doSomething());
	}

	public function testReturnArgumentStub()
    {
        // Create a stub for the SomeClass class.
        $stub = $this->getMockBuilder('Company\Product\SomeClass')
                     ->getMock();

        // Configure the stub.
        $stub->method('doSomething')
             ->will($this->returnArgument(0));

        // $stub->doSomething('foo') returns 'foo'
        $this->assertEquals('foo', $stub->doSomething('foo'));

        // $stub->doSomething('bar') returns 'bar'
        $this->assertEquals('bar', $stub->doSomething('bar'));
    }

    public function testReturnSelf()
    {
        // Create a stub for the SomeClass class.
        $stub = $this->getMockBuilder('Company\Product\SomeClass')
                     ->getMock();

        // Configure the stub.
        $stub->method('doSomething')
             ->will($this->returnSelf());

        // $stub->doSomething() returns $stub
        $this->assertSame($stub, $stub->doSomething());
    }
}