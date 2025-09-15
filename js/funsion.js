function genpass () {   
    let length = parseInt(document.getElementById("len").value);

    // Limitar la longitud
    if (isNaN(length) || length < 6) length = 6;
    if (length > 20) length = 20;
    document.getElementById("len").value = length;

    let mayus = document.getElementById("mayus").checked;
    let num = document.getElementById("num").checked;
    let cares = document.getElementById("cares").checked;

    let lowerChars = "abcdefghijklmnopqrstuvwxyz";
    let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numberChars = "0123456789";
    let specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    let allChars = lowerChars;
    if (mayus) allChars += upperChars;
    if (num) allChars += numberChars;
    if (cares) allChars += specialChars;

    let password = "";
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    document.querySelector(".result").innerText = "Tu resultado: " + password;
}

document.getElementById("pass-gen").addEventListener("click", genpass);