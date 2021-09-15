const {convert} = require('./Functions');

// # manual mocking 
//  --> mocking fetch 

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ rates: { CAD: 1.42 } }),
  })
);


// more https://github.com/leighhalliday/mock-fetch-jest-demo