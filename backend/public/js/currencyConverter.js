const number = 123456.789;

const formatCurrency = new Intl.NumberFormat(undefined, {
  style: 'currency',
  currency: 'Naira',
});

console.log(formatCurrency.format(number));
