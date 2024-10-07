const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');


form.addEventListener('submit', e =>{
    e.preventDefault();

    if (validateInputs()){
        form.submit();
    }
})

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    let isFormValid = true;

    if(emailValue ==='') {
        setError(email, 'Masukkan email anda!');
        isFormValid = false;
    } else if (!isValidEmail(emailValue)){
        setError(email, 'Masukkan alamat email yang valid!');
        isFormValid = false;
    } else{
        setSuccess(email);
    }

    if(passwordValue === ''){
        setError(password, 'Masukkan password anda!');
        isFormValid = false;
    } else{
        setSuccess(password);
    }

    return isFormValid;
}