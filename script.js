const progressBar = document.querySelector('.progress-bar');
const progressContainer = document.querySelector('.progress-container');
const buttonContainer = document.querySelector('.button-container'); 


progressBar.addEventListener('animationend', () => {

    progressBar.style.visibility = 'hidden';
    const buttonElement = document.createElement('p');
    buttonElement.classList.add("button");
    buttonContainer.appendChild(buttonElement);
  
    const linkElement = document.createElement("a");
    linkElement.classList.add("link")
    linkElement.href = "list.html";

    linkElement.textContent = "Zahájit Nákup";
    buttonElement.appendChild(linkElement);

});





