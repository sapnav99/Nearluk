export const fromateNumber = (number: any) => {
  if (number >= 10000000) {
    const crore = (number / 10000000)
    if(isDecimal(crore)){
      return `${crore.toFixed(2)} Cr`
    }
    return `${crore.toFixed(0)} Cr`
  }
  if (number >= 100000) {
    const Lakhs = (number / 100000)
    if(isDecimal(Lakhs)){
      return `${Lakhs.toFixed(2)} lac`
    }
    return `${Lakhs.toFixed(0)} Lac`
  }
  if (number >= 1000) {
    const thousand = (number / 1000).toFixed();
    return `${thousand} K`;
  } else {
    return number?.toString();
  }
};

function isDecimal(number: number) {
  // Check if the number is not a finite number or NaN
  if (!isFinite(number) || isNaN(number)) {
    return false;
  }
  
  // Check if the integer representation of the number is equal to the original number
  return Math.floor(number) !== number;
}
