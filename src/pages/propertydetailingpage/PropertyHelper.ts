export const fromateNumber = (number: any) => {
  if (number >= 10000000) {
    const crore = (number / 10000000).toFixed(2);
    return `${crore} Cr`;
  }
  if (number >= 100000) {
    const Lakhs = (number / 100000).toFixed(2);
    return `${Lakhs} Lakh`;
  }
  if (number >= 1000) {
    const thousand = (number / 1000).toFixed();
    return `${thousand} K`;
  } else {
    return number?.toString();
  }
};
