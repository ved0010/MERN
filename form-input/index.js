const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const date = document.getElementById('date');
const phoneNo = document.getElementById('phoneNo');
const password = document.getElementById('password');
const card = document.getElementById('card');

const displayUsername = document.getElementById('displayUsername');
const displayEmail = document.getElementById('displayEmail');
const displayDate = document.getElementById('displayDate');
const displayPhoneNo = document.getElementById('displayPhoneNo');

form.addEventListener('submit', e => {
    e.preventDefault();

    if (validateInputs()) {
        displayData();
        flipCard();
    }
});

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

const isValidPhoneNo = phoneNo => {
    const re = /^\d{10}$/;
    return re.test(String(phoneNo));
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const dateValue = date.value.trim();
    const passwordValue = password.value.trim();
    const phoneNoValue = phoneNo.value.trim();
    let isValid = true;

    if (usernameValue === '') {
        setError(username, 'Username is required');
        isValid = false;
    } else {
        setSuccess(username);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
        isValid = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
        isValid = false;
    } else {
        setSuccess(email);
    }

    if (dateValue === '') {
        setError(date, 'Date of birth is required');
        isValid = false;
    } else {
        setSuccess(date);
    }

    if (passwordValue === '') {
        setError(password, 'Password is required');
        isValid = false;
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 characters.');
        isValid = false;
    } else {
        setSuccess(password);
    }

    if (phoneNoValue === '') {
        setError(phoneNo, 'Phone number is required');
        isValid = false;
    } else if (!isValidPhoneNo(phoneNoValue)) {
        setError(phoneNo, 'Invalid phone number');
        isValid = false;
    } else {
        setSuccess(phoneNo);
    }

    return isValid;
};

const displayData = () => {
    displayUsername.textContent = username.value.trim();
    displayEmail.textContent = email.value.trim();
    displayDate.textContent = date.value.trim();
    displayPhoneNo.textContent = phoneNo.value.trim();
}

function flipCard() {
    card.classList.toggle('flipped');
}
