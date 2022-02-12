const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const checker = () => {
    if(pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers) && pass.value.match(special)) {
        p.textContent = "Hasło jest silne"
        p.style.color = "lime"
    } else if(pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers)) {
        p.textContent = "Hasło jest dobre"
        p.style.color = "orange"
    } else {
        p.textContent = "Hasło jest słabe"
        p.style.color = "tomato"
    }
}

const empty = () => {
    if(pass.value !== ""){
        checker()
    } else {
        p.textContent = "Nie podałeś hasła..."
        p.style.color = ""
    }
}

pass.addEventListener("keyup", empty)

