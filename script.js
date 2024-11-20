document.querySelector('.svg-container').addEventListener('click', function() {
    this.classList.toggle('opened');
    document.querySelector('.aContainer').classList.toggle('active');
});

let popUpBox = document.getElementById("popUp");
let sobreNosotros = document.getElementById("sobreNosotros");
let popUpContactanos = document.getElementById("popUpContactanos");
let closeButton = document.getElementById("closeButton");

closeButton.addEventListener("click", (e)=>
    {
        closePopUp();
    });

popUpContactanos.addEventListener("click", (e)=>
    {
        closePopUp();
    });

sobreNosotros.addEventListener("click", (e)=>
    {
        displayPopUp();
    });

function displayPopUp()
{
    popUpBox.classList.add("mostrarPopUp")
};

function closePopUp()
{
    popUpBox.classList.remove("mostrarPopUp");
};