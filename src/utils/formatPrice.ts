export const formatPrice = (price: number) => {
  let priceStr = price?.toString();
  let priceArr = priceStr?.split('').reverse();

  let formattedPrice = '';
  for (let i = 0; i < priceArr?.length; i++) {
    if (i > 0 && i % 3 === 0) {
      formattedPrice = ',' + formattedPrice;
    }
    formattedPrice = priceArr[i] + formattedPrice;
  }

  return formattedPrice;
};
