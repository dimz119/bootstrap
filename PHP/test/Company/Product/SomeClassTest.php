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

    public function testOnConsecutiveCallsStub()
    {
        // Create a stub for the SomeClass class.
        $stub = $this->getMockBuilder('Company\Product\SomeClass')
                     ->getMock();

        // Configure the stub.
        $stub->method('doSomething')
             ->will($this->onConsecutiveCalls(2, 3, 5, 7));

        // $stub->doSomething() returns a different value each time
        $this->assertEquals(2, $stub->doSomething());
        $this->assertEquals(3, $stub->doSomething());
        $this->assertEquals(5, $stub->doSomething());
    }

    public function testObserversAreUpdated()
    {
        // Create a mock for the Observer class,
        // only mock the update() method.
        $observer = $this->getMockBuilder('Company\Product\Observer')
                         ->setMethods(array('update'))
                         ->getMock();

        // Set up the expectation for the update() method
        // to be called only once and with the string 'something'
        // as its parameter.
        $observer->expects($this->once())
                 ->method('update')
                 ->with($this->equalTo('something'));

        // Create a Subject object and attach the mocked
        // Observer object to it.
        $subject = new \Company\Product\Subject('My subject');
        $subject->attach($observer);

        // Call the doSomething() method on the $subject object
        // which we expect to call the mocked Observer object's
        // update() method with the string 'something'.
        $subject->doSomething();
    }

    public function testFunctionCalledTwoTimesWithSpecificArguments()
    {
        $mock = $this->getMockBuilder('stdClass')
                     ->setMethods(array('set'))
                     ->getMock();

        $mock->expects($this->exactly(2))
             ->method('set')
             ->withConsecutive(
                 array($this->equalTo('foo'), $this->greaterThan(0)),
                 array($this->equalTo('bar'), $this->greaterThan(0))
             );

        $mock->set('foo', 21);
        $mock->set('bar', 48);
    }

    public function testIdenticalObjectPassed()
    {
        $expectedObject = new \stdClass;
        $mock = $this->getMockBuilder('stdClass')
                     ->setMethods(array('foo'))
                     ->getMock();

        $mock->expects($this->once())
             ->method('foo')
             ->with($this->identicalTo($expectedObject));

        $mock->foo($expectedObject);
    }

    public function testObserversAreUpdated2()
    {
        $subject = new Subject('My subject');

        // Create a prophecy for the Observer class.
        $observer = $this->prophesize('Company\Product\Observer');

        // Set up the expectation for the update() method
        // to be called only once and with the string 'something'
        // as its parameter.
        $observer->update('something')->shouldBeCalled();

        // Reveal the prophecy and attach the mock object
        // to the Subject.
        $subject->attach($observer->reveal());

        // Call the doSomething() method on the $subject object
        // which we expect to call the mocked Observer object's
        // update() method with the string 'something'.
        $subject->doSomething();
    }
}