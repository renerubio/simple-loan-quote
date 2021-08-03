export const calculateTotal = (amount, term) => {
  let totalQuantity;
  if (amount <= 1000) {
    totalQuantity = amount * 0.25;
  } else if (amount > 1000 && amount <= 5000) {
    totalQuantity = amount * 0.2;
  } else if (amount > 5000 && amount <= 10000) {
    totalQuantity = amount * 0.15;
  } else {
    totalQuantity = amount * 0.1;
  }

  const getTermTotal = (term) => {
    return {
      '3': amount * 0.05,
      '6': amount * 0.1,
      '12': amount * 0.15,
      '24': amount * 0.2,
    }[term]
  };

  const resultados = [getTermTotal(term), totalQuantity, amount];

  return resultados.map(item => Number(item)).reduce((a, b) => a + b);
};

export default calculateTotal;
