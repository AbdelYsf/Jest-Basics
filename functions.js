
const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: x => x,
    createUser:()=> {
        const user = {name:'Abdel'};
        return user;
    }
    
}
export async function convert(base, destination) {
    try {
      const result = await fetch(
        `https://api.exchangeratesapi.io/latest?base=${base}`
      );
      const data = await result.json();
      return data.rates[destination];
    } catch (e) {
      return null;
    }
  }

module.exports = functions;