//es para copiar la contraseña al portapapeles

let passwordText = document.querySelector(".result").innerText;
function copiar() {
    let passwordText = document.querySelector(".result").innerText;
    let password = passwordText.replace("Tu resultado: ", "");
    navigator.clipboard.writeText(password).then(function() {
        //confirmación visual
        alert("Contraseña copiada al portapapeles: " + password);
    }, function(err) {
        console.error("Error al copiar la contraseña: ", err);
    });
}