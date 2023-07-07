console.log(document.querySelector(".home-login-bttn"));
console.log(document.querySelector(".home-signup-bttn"))

const loginButton = document.querySelector('.home-login-bttn');

loginButton.addEventListener('click', () => document.location.replace("/login"));

const signupButton = document.querySelector('.home-signup-bttn');
signupButton.addEventListener('click', () => document.location.replace("signup"));
