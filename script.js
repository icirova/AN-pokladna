const progressBar = document.querySelector('.progress-bar');
const progressContainer = document.querySelector('.progress-container');
const buttonContainer = document.querySelector('.button-container'); 

// Zachycení události animationend
progressBar.addEventListener('animationend', () => {
  // Po skončení animace změň viditelnost na 'hidden'
    progressBar.style.visibility = 'hidden';
    const buttonElement = document.createElement('p');
     console.log(buttonElement)
    buttonElement.classList.add("button");
    buttonContainer.appendChild(buttonElement);
  
    const linkElement = document.createElement("a");
    linkElement.classList.add("link")
    linkElement.href = "list.html";

    linkElement.textContent = "Zahájit Nákup";
    buttonElement.appendChild(linkElement);

});





