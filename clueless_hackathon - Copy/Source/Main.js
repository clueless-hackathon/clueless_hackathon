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
