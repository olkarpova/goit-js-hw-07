const formElem = document.querySelector('.js-login-form');
console.log(formElem);

formElem.addEventListener('submit', (event) => {
    event.preventDefault();


    const emailValue = formElem.elements.email.value.trim();
    const passwordValue = formElem.elements.password.value.trim();

    if (emailValue === '' || passwordValue === '') {
        alert('All form fields must be filled in');
        return;
    }

    const userData = {
        email: emailValue,
        password: passwordValue,
    };

    console.log(userData);
    

    formElem.reset();
})