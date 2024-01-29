//js
//nav
// Function to change the background color of the navbar on scroll 
function handleScroll() {
  const navbar = document.querySelector('#old-menu');
  const scrollY = window.scrollY;

  // You can set a threshold value for when the background color changes
  // For example, change color when scrolled down by 100 pixels
  if (scrollY >= 100) {
      navbar.style.backgroundColor = 'white';
      navbar.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';

    
      //for transition nav
      navbar.style.transition= 'background-color 0.5s ease-in-out';
    
  
  } else {
      navbar.style.backgroundColor = 'transparent';
  
  }
}
//btn
function show() {
  let span = document.getElementById("spn");
  let h1 = document.createElement('h1');

  let txt = document.createTextNode("Tapez Le CLE D'inscription ");
  h1.style.color = 'blue';
  h1.style.fontSize = '18px';
  h1.style.fontWeight = 'bold';
  h1.style.fontFamily = 'Arial, sans-serif';
  h1.appendChild(txt);


  //inputyy
  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', 'Enter Le Cle ici');
  input.setAttribute('maxlength', '50'); // Limiting input to 50 characters

  // Apply CSS styles to the input element
  input.style.padding = '10px';
  input.style.fontSize = '16px';
  input.style.borderRadius = '5px';
  input.style.border = '2px solid #ccc';
  input.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
  input.style.margin='50px';

  // Add event listeners for input validation or other purposes
  input.addEventListener('input', function(event) {

    console.log('Input value changed:', event.target.value);
  });

  // Append the input element to a parent element in the DOM
  let container = document.getElementById('inputContainer');
   // Crée un bouton de soumission
  let submitButton = document.createElement('button');
  submitButton.textContent = 'Submit';

  // Ajoute un gestionnaire d'événements pour le bouton de soumission
  submitButton.addEventListener('click', function() {
    alert(' Cle  soumis !');
  });
  span.appendChild(h1);
  span.appendChild(input);
  span.appendChild(submitButton);
  submitButton.style.padding = '10px 20px';
submitButton.style.backgroundColor = '#4CAF50';
submitButton.style.color = 'white';
submitButton.style.border = 'none';
submitButton.style.borderRadius = '5px';
submitButton.style.cursor = 'pointer';


  // Rendre le bouton invisible après avoir cliqué dessus
  let button = document.getElementById('myButton');
  button.style.display = 'none';
}


