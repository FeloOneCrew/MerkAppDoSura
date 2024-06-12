window.onload = function() {
    let listado = document.querySelector("ol");
    let desorden = document.createElement("ul");
    while (listado.firstChild) {
        desorden.appendChild(listado.firstChild);
    }
    desorden.classList.add("listado");
    listado.replaceWith(desorden, listado);
};

window.onload = function() {
    let h2Element = document.querySelector("h2");
    h2Element.classList.add("h2");
};


window.onload = function() {
    let nuevo = document.createElement("li");
    nuevo.textContent = "Recoger a los niños";
    
    prepararAlmuerzo = document.querySelector("#listado li:nth-child(4)");
    prepararAlmuerzo.parentNode.insertBefore(nuevo, prepararAlmuerzo.nextSibling);

    var items = document.querySelectorAll("#listado li");
    items.forEach(function(item) {
        if (item.textContent === "desayunar" || item.textContent === "preparar el almuerzo" || item.textContent === "Recoger a los niños") {
            item.classList.add("cumplido");
        } else {
            item.classList.add("fallido");
        }
    });
};