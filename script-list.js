const stockCard = document.querySelectorAll('.card');
const stockTitle = document.querySelectorAll('.card__title');
const stockPrice = document.querySelectorAll('.card__price');
const cart = document.querySelector('.cart-list');
const finalPriceElement = document.querySelector('.final-price')
const buttonPay = document.querySelector('.cart__button');
const containerCart = document.querySelector('.container-cart');
const containerPay = document.querySelector('.container-pay')
let finalPrice = 0





stockCard.forEach((stockCard, index) => {
    stockCard.addEventListener('click', () => {
      const stockTitleBlock = document.createElement('div');
      stockTitleBlock.classList.add('cart')

      const stockTitleElement = document.createElement('p');
      stockTitleElement.innerText = stockTitle[index].innerText;
      stockTitleBlock.appendChild(stockTitleElement);

      const stockPriceElement = document.createElement('p');
      
      const priceText = stockPrice[index].innerText;

      stockPriceElement.innerText = priceText;
      stockTitleBlock.appendChild(stockPriceElement);

      cart.appendChild(stockTitleBlock);

      //Výpočet celkové částky nákupu
      finalPrice +=  parseFloat(priceText);   
      finalPriceElement.textContent = `${finalPrice} Kč`;
    });
  });

  buttonPay.addEventListener('click', () => {
    buttonPay.style.visibility = 'hidden';
    const paySubtitle = document.createElement('h2');
    paySubtitle.classList.add('pay-subtitle')
    paySubtitle.textContent = '💸Platba';
    containerPay.appendChild(paySubtitle);

    const cashfromCustomerLabel = document.createElement('p');
    cashfromCustomerLabel.textContent ='Přijatá částka';
    cashfromCustomerLabel.classList.add('customer-label')
    containerPay.appendChild(cashfromCustomerLabel);

    const cashfromCustomerInput = document.createElement('input');
    cashfromCustomerInput.setAttribute('type','number');
    cashfromCustomerInput.classList.add('customer-input');
    containerPay.appendChild(cashfromCustomerInput);

    cashfromCustomerInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        const cashFromCustomerElement = document.querySelector('.customer-input');
        const cashFromCustomer = cashFromCustomerElement.value;

        const cashToReturn = cashFromCustomer - finalPrice;

        const cashToReturnOutput = document.createElement('p');
        cashToReturnOutput.textContent = `💰${cashToReturn} Kč`;
        cashToReturnOutput.classList.add('return-label')
        containerPay.appendChild(cashToReturnOutput);

        const buttonCloseCart = document.createElement('button');
        buttonCloseCart.classList.add('button', 'cart__button');
        
        const linkElement = document.createElement("a");
        linkElement.classList.add("link");
        linkElement.href = "index.html";
        linkElement.textContent = "Ukončit";
        buttonCloseCart.appendChild(linkElement);

        containerCart.appendChild(buttonCloseCart);
      }


    });

    const cashToReturnLabel = document.createElement('p');
    cashToReturnLabel.textContent ='Vrátit';
    cashToReturnLabel.classList.add('customer-label')
    containerPay.appendChild(cashToReturnLabel);

    
  });






