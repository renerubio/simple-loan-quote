export const calculateTotal = (amountLoan, term) => {
  let totalQuantity;
  totalQuantity = (amountLoan <= 1000) && (amountLoan * 0.25);
  totalQuantity = (amountLoan > 1000 && amountLoan <= 5000) && (amountLoan * 0.2);
  totalQuantity = (amountLoan > 5000 && amountLoan <= 10000) && (amountLoan * 0.15);
  totalQuantity = (amountLoan > 10001) && (amountLoan * 0.1);

  const getTermTotal = (term) => {
    return {
      '3': amountLoan * 0.05,
      '6': amountLoan * 0.1,
      '12': amountLoan * 0.15,
      '24': amountLoan * 0.2,
    }[term]
  };

  const results = [getTermTotal(term), totalQuantity, amountLoan];

  return results.map(item => Number(item)).reduce((a, b) => a + b);
};

export const formatValue = (value, toFixed = 2) => (parseFloat(value).toFixed(toFixed) + ' €')