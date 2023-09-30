// Get all the buttons and add click event listeners
const buttons = document.querySelectorAll('.button');
console.log(buttons)
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove the 'select' class from all buttons
    buttons.forEach(btn => {
      btn.classList.remove('selected');
      
    });

    // Add the 'select' class to the clicked button
    button.classList.add('selected');
    });
});

document.getElementById("create").addEventListener("click", redirectCreate);

function redirectCreate(){ 
    window.location = "./create.html"; 
}

document.getElementById("breakfast").addEventListener("click", redirectBreakfast);

function redirectBreakfast(){ 
    window.location = "./breakfast.html"; 
}

document.getElementById("lunch").addEventListener("click", redirectLunch);

function redirectLunch(){ 
    window.location = "./lunch.html"; 
}

document.getElementById("dinner").addEventListener("click", redirectDinner);

function redirectDinner(){ 
    window.location = "./dinner.html"; 
}

document.getElementById("appetizers").addEventListener("click", redirectAppetizers);

function redirectAppetizers(){ 
    window.location = "./appetizers.html"; 
}

document.getElementById("dessert").addEventListener("click", redirectDessert);

function redirectDessert(){ 
    window.location = "./dessert.html"; 
}

document.getElementById("back").addEventListener("click", backButton);

function backButton() {
  window.location.href = "./index.html";
}
