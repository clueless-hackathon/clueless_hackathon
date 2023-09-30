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
    if (id = create) {
        button.classList.add('create')
    }
  });
});

document.getElementById("create").addEventListener("click", redirect);

function redirect(){ 
    window.location = "./create.html"; 
}