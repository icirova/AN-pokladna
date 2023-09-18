const stockCard = document.querySelectorAll('.card');
const stockTitle = document.querySelectorAll('.card__title');
const stockPrice = document.querySelectorAll('.card__price');
const cart = document.querySelector('.cart-list');
// console.log(stockCard)

// const titleText = stockTitle[1].innerText;
// console.log(stockTitle[1].innerText);

// const priceText = stockPrice[1].innerText
// console.log(stockTitle[1].innerText);


stockCard.forEach((stockCard, index) => {
    stockCard.addEventListener('click', () => {
      const stockTitleBlock = document.createElement('div');
      stockTitleBlock.classList.add('cart')

      const stockTitleElement = document.createElement('p');
      stockTitleElement.innerText = stockTitle[index].innerText;
      stockTitleBlock.appendChild(stockTitleElement);

      const stockPriceElement = document.createElement('p');
      stockPriceElement.innerText = stockPrice[index].innerText;
      stockTitleBlock.appendChild(stockPriceElement);

      cart.appendChild(stockTitleBlock);
    });
  });