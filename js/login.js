const login = document.querySelector("#login");
const loginForm = login.querySelector("#login-form");
const loginInput = login.querySelector("#login-input");

const greeting = document.querySelector("#greeting");
const todo = document.querySelector("#todo");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    console.log(username);
    localStorage.setItem(USERNAME_KEY, username);
    paintingGreeting(username);
}

function paintingGreeting(username){
    greeting.innerText = `Hello! ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    todo.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername) {
    paintingGreeting(savedUsername);
} else {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
