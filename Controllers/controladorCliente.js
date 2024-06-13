//Consumiendo el Api para acceder a la base de datos

let url = "http://localhost:8080/storeapi/v1/usuario"

let peticion = {
    method:"GET",
    headers:{}
}

fetch(url, peticion)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
    console.log(respuesta)
    //recorriendo la respuesta para hacer render
    let fila = document.getElementById("usuario");
    respuesta.forEach(function(usuarios){
        let columna = document.createElement("div")
        columna.classList.add("col")
        let targeta = document.createElement("div")
        targeta.classList.add("card", "shadow", "h-100")

        let nombreCliente = document.createElement("h5")
        nombreCliente.classList.add("text-center")
        nombreCliente.textContent = usuarios.nombres

        let cedula = document.createElement("h5")
        cedula.classList.add("text-center")
        cedula.textContent = usuarios.cedula

        let correo = document.createElement("h5")
        correo.classList.add("text-center")
        correo.textContent = usuarios.correo

        targeta.appendChild(nombreCliente)
        targeta.appendChild(cedula)
        targeta.appendChild(correo)
        columna.appendChild(targeta)
        fila.appendChild(columna)
    });
})
.catch(function(respuesta){
    console.log(respuesta)
})