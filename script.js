let passwordbox = document.getElementById("password");
let button = document.getElementById("btn");
let number = "0123456789";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let Special = "!£$%^&*()_+=~}{}#[]@:';?></.,`']";
let all = number + lowercase + Uppercase;
let length = 12;
button.addEventListener("click", () => {
    let password = "";
    password += number[Math.floor(Math.random() * number.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += Uppercase[Math.floor(Math.random() * Uppercase.length)];
    password += Special[Math.floor(Math.random() * Special.length)];
    password += number[Math.floor(Math.random() * number.length)];
    while (length > password.length) {
        password += all[Math.floor(Math.random() * all.length)];

    }
    passwordbox.value = password
})


function copypassword() {
    if (passwordbox.value !== "") {
        passwordbox.select();
        document.execCommand("copy");
        alert("Your New Generated Password Is copied");
    }

}
























// if (inputfield.value == "") {
//     alert("no text")
// } else if (inputfield.value !== "") {

//     alert("text generated");
// }