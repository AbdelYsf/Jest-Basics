
/*
 #Mock functions = spies
    --> no side-effect
    --> counts functions calls
    --> records arguments passed when called
    --> can be "loaded" with return value
 # loaded automatically by npm if approprietely  named 
    --> mocks must reside in __mocks__ folder (must be in the same folder as the module we are trying to mock)
 # two ways : creating a mock function (jest.fn())  or manual mock (to override a module dependency)


*/

// testing the foreach impl 

function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
      callback(items[index]);
    }
  }

  const mockCallBack = jest.fn(x => x+42);

  forEach([1,2],mockCallBack);

  //  #.mock property 
  it('should pass',()=>{
    const callTimes = mockCallBack.mock.calls.length;
    console.log( mockCallBack.mock);
    expect(callTimes).toBe(2);
  });
  /*
  All mock functions have this special .mock property, which is where data about how 
  the function has been called and what the function returned is kept.
   The .mock property also tracks the value of this for each call
  mock property 
    {
      calls: [ [ 1 ], [ 2 ] ],
      instances: [ undefined, undefined ],=> instances of function (created by new )
      invocationCallOrder: [ 1, 2 ],
      results: [ { type: 'return', value: 43 }, { type: 'return', value: 44 } ]
    }
  
  */

    // # mocking return value 

    const myMock = jest.fn();
    myMock.mockReturnValueOnce(2).mockReturnValueOnce(5);
    myMock()// first call : 2
    myMock()// second call : 5

