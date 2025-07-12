export function formatNumber(number) {
  const [integerPart, decimalPart] = String(number).split('.');/* this saves each part of the split into two different variables. same as: 
  const parts = String(number).split('.');
const integerPart = parts[0];
const decimalPart = parts[1];*/
 
  let newString = '';
  let count = 0;

  for (let i = integerPart.length - 1; i >= 0; i--) {
    newString = integerPart[i] + newString; // this makes sense after first iteration 
    count++;

    if (count % 3 === 0 && i !== 0) {
      newString = ',' + newString;
    }
  }

  // If there's a decimal part, add it back
  return decimalPart ? `${newString}.${decimalPart}` : newString;
  // the avobe ${newString}.${decimalPart} is same as "236,666" + "." + "67"
}








