export const convertedPrice = (
  price: number,
  dollarCurrency: number | null,
  locale: string
) => {
  if (dollarCurrency && locale === 'en-US') {
    return price * dollarCurrency;
  } else {
    return price;
  }
};
