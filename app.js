const inputs =  document.querySelectorAll(".input");

function focusFunction(){
    let parent =  this.parentNode;
    parent.classList.add("focus")
}

function delFunc(){
    let parent = this.parentNode;
    if (this.value == ""){
    parent.classList.remove("focus")
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunction);
    input.addEventListener("blur", delFunc); //learning!
})

const formulario = document.getElementById('formulario');
const registro = document.getElementById('registro');
const activo = document.getElementById('activo');

formulario.addEventListener('submit', async(e) => {
    e.preventDefault();
    //Escribimos las filas
    try {
        const respServer = await fetch('https://sheet.best/api/sheets/1c448eab-3092-45f0-8181-03f739f3ffff', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "Nombre": formulario.name.value,
                "Correo": formulario.email.value,
                "Telefono": formulario.phone.value,
                "Mensaje": formulario.message.value
            })
        })

        const contenRes = await respServer.json();
        console.log(contenRes);

    } catch (error) {
        console.log(error);
    }

    //Leer Datos
    //try {
    //    const respServer = await fetch('https://sheet.best/api/sheets/1c448eab-3092-45f0-8181-03f739f3ffff');
//
    //    const contenRes = await respServer.json();
    //    console.log(contenRes);
//
    //} catch (error) {
    //    console.log(error);
    //}

    registro.classList.add('exito');
    activo.classList.remove('exito');
})

