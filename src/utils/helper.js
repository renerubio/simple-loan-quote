export const calculateTotal = (amountLoan, term) => {
  let totalQuantity;
  if (amountLoan <= 1000) {
    totalQuantity = amountLoan * 0.25;
  } else if (amountLoan > 1000 && amountLoan <= 5000) {
    totalQuantity = amountLoan * 0.2;
  } else if (amountLoan > 5000 && amountLoan <= 10000) {
    totalQuantity = amountLoan * 0.15;
  } else {
    totalQuantity = amountLoan * 0.1;
  }

  const getTermTotal = (term) => {
    return {
      '3': amountLoan * 0.05,
      '6': amountLoan * 0.1,
      '12': amountLoan * 0.15,
      '24': amountLoan * 0.2,
    }[term]
  };

  const resultados = [getTermTotal(term), totalQuantity, amountLoan];

  return resultados.map(item => Number(item)).reduce((a, b) => a + b);
};

export const formatValue = (value, toFixed = 2) => (parseFloat(value).toFixed(toFixed) + ' €')