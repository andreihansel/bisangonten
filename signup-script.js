const form = document.getElementById('form');
const fullName = document.getElementById('full-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


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
    const fullnameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    let isFormValid = true;


    if(fullnameValue === '') {
        setError(fullName, 'Masukkan nama lengkap anda!');
        isFormValid = false;
    } else {
        setSuccess(fullName);
    }

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
    } else if (passwordValue.length < 8 ){
        setError(password, 'Password harus memuat minimal 8 karakter!');
        isFormValid = false;
    } else{
        setSuccess(password);
    }

    if(password2Value === ''){
        setError(password2, 'Masukkan konfirmasi password anda!');
        isFormValid = false;
    }else if (password2Value !== passwordValue){
        setError(password2, 'Password tidak sama!');
        isFormValid = false;
    }else{
        setSuccess(password2);
    }


    return isFormValid;
}