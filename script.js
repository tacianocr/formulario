const signUpButton = document.getElementById('signUp');
const signUpButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signUpButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});