//button that redirects to subpage
document.getElementById("redirectButton").addEventListener("click", redirect);

function redirect(){ 
    window.location = "./page2.html"; 
}

var button = document.getElementById("print");
        button.addEventListener("click", function () {
            var doc = new jsPDF();
            var pdf = document.querySelector(".toPrint");
            doc.fromHTML(pdf);
            doc.save("Recipe.pdf");
        });