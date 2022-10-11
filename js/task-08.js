const refs ={
    form: document.querySelector('.login-form'),
    emailInput: document.querySelector('[ type="email"]'),
    passwordInput: document.querySelector('[type="password"]'),
    submitButton: document.querySelector('[type="submit"]'),
}

refs.form.addEventListener('submit', onFormSumbut)

function onFormSumbut(event) {
    event.preventDefault()

    const mail = this.elements.email.value
    const password = this.elements.password.value

    if (mail === '' || password === '') {
        alert('Всі поля повинні бути заповнені')
        return
    }

    const formData = {
        mail,
        password
    }
    console.log(formData);
    refs.form.reset()
    
    // if (mail !== '' && password !== '') {  
    //     console.log(formData);
    // }
}