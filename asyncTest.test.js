/*
--> 3 ways to make a test async
     --> pass a done() callback 
     --> return a promess from the test
     --> pass an async function (most clear one)
*/


     const test = ()=>{
        expect(3).toBe(3);
     };

    jest.setTimeout(9000)
     /* 
     -by default jest will wait for the test for 5 seconds to be terminated,else the test will fail
     -we can change the timeout by config options or jest.setTimeout()
     */

     //--> pass a done() callback 
    it('pass a callback',test=>{
       
        setTimeout(test,8000);
    }) ;

    // --> return a promess from the test
    it('return a promess from the test',()=>{
        return new Promise(test=> setTimeout(test,8000));
    }) ;

    // --> pass an async function 
    it('pass an async function',async()=>{
        await setTimeout(test,600);
    }) ;


