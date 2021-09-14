

describe('basic test suit',()=>{

    //it will run once before all tests of this suit
    beforeAll(()=>{
        console.log("beforeAll");
    });

    // it will run before each test
    beforeEach(()=>{
        console.log("beforeEach");
    });

    // it will run after each test
    afterEach(()=>{
        console.log("afterEach");
    });

    // a test
    test('this is a test',()=>{
        expect(3).toBe(3);
    });

    // alias for a test
    it('this is an alias for test ',()=>{
        expect(3).toBe(3);
    });

    // skipped test
    it.skip("this test will be skipped",()=>{
        expect(3).toBe(3);
    });

    // alias for skipped test
    xit('this an aias for skpped test ',()=>{
        expect(3).toBe(3);
    });

    // isolated test 
    it.only("this test is isolated (all other tests will be skipped)",()=>{
        expect(3).toBe(3);
    });
    

    // alias for isolated test
    fit(' aias for isolated test ',()=>{
        expect(3).toBe(3);
    });

    //'it will run once after all tests of this suit',
    afterAll(()=>{
        console.log("afterAll");
    });

});

