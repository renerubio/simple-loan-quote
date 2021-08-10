const constants = Object.freeze({
  header: {
    title: 'Calculate your Loan',
    descripcion:
      'Fill in all the fields of the form and get a quote',
  },
  form: {
    labelQuantity: 'Quantity loan',
    labelTerm: 'Term to pay',
    placeholder: 'Example: 3000',
    select: 'Select a term to pay',
    _3_months: '3 months',
    _6_months: '6 months',
    _12_months: '12 months',
    _24_months: '24 months',
    calculate: 'Calculate',
    instructions:
      'To calculate the quote for an amountLoan and select the term to pay',
    error: 'All fields are required'
  },
  result: {
    titleResult: 'Summary',
    amountLoan: 'The amountLoan requested: ',
    toPayIn: 'To pay in ',
    termMonths: ' months ',
    paymentMonthly: 'Your monthly payment is: ',
    total: 'Total to pay: ',
  }
});

export default constants;
