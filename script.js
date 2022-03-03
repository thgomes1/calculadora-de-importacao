let resultado = document.getElementById("resultado");
let inputValue = document.getElementById("inputValue");
let inputShip = document.getElementById("inputShip");
let errorMsg = document.getElementById("errorMsg");
let resultContainer = document.getElementById("resultContainer");
let sectionContainer = document.getElementById("sectionContainer");
let howContent = document.getElementById("howContent");
let howWork = document.getElementById("howWork");

onload = function () {
    howWork.addEventListener("mouseover", showInfo);
};

function showInfo() {
    sectionContainer.style.filter = "blur(3px)";
    howContent.style.opacity = "100%";
    howContent.style.visibility = "visible";
    howWork.addEventListener("mouseout", hideInfo);
}
function hideInfo() {
    howContent.style.opacity = "0%";
    howContent.style.visibility = "hidden";
    sectionContainer.style.filter = "none";
}

function cButton() {
    let valor = parseFloat(inputValue.value) + parseFloat(inputShip.value);
    let imposto = 0.6;
    let r = valor * imposto;
    console.log(r);

    if (r > 0) {
        resultado.innerText = "R$" + parseInt(r);
        sectionContainer.style.filter = "blur(5px)";
        resultContainer.style.visibility = "visible";
        resultContainer.style.opacity = "100%";
        errorMsg.style.visibility = "hidden";
        errorMsg.style.opacity = "0%";
    } else {
        errorMsg.style.visibility = "visible";
        errorMsg.style.opacity = "100%";
    }
}

function bButton() {
    sectionContainer.style.filter = "none";
    resultContainer.style.visibility = "hidden";
    resultContainer.style.opacity = "0%";
}
