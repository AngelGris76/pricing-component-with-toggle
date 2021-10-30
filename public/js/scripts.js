const pricingCheck = document.getElementById("pricingcheck");
const cardPrice = document.querySelectorAll(".card__price");

const cardPriceValue = [...cardPrice].reduce((price, card) => {
  const tempArray = [...price];

  tempArray.push(card.lastChild);
  return tempArray;
}, []);

const basicInitialValue = Number.parseFloat(cardPriceValue[0].textContent);

const initialValues = cardPriceValue.reduce((price, card) => {
  const tempArray = [...price];

  tempArray.push(Number.parseFloat(card.textContent));
  return tempArray;
}, []);

pricingCheck.addEventListener("click", () => {
  if (pricingCheck.checked === true) {
    cardPriceValue.forEach((element, index) => {
      element.textContent = (initialValues[index] * 10 + 0.09).toFixed(2);
    });
  } else {
    cardPriceValue.forEach((element, index) => {
      element.textContent = initialValues[index].toString();
    });
  }
});
