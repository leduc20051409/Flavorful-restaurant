const form = document.querySelector('.form-booking');

form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    if (checkValidations()) {
        alert('Form hợp lệ! Dữ liệu đã được gửi.');
        form.submit(); 
    }
});

function checkValidations() {
    const revision = document.getElementById('reversion').value.trim();
    const fullname = document.getElementById('full-name').value.trim();
    const number = document.getElementById('guest-number').value.trim();
    const phoneNumber = document.getElementById('phone-number').value.trim();

    const revError = document.getElementById('reversion-error');
    const nameError = document.getElementById('name-error');
    const guestError = document.getElementById('guest-error');
    const phoneError = document.getElementById('phone-error');

    revError.textContent = '';
    nameError.textContent = '';
    guestError.textContent = '';
    phoneError.textContent = '';
    
    let isValid = true;

    const regexName = /^[A-Za-z\s]+$/;
    const regexPhone = /^[0-9]{10,11}$/;
    
    if (revision === '' || fullname === '' || number === '' || phoneNumber === '') {
        alert('Please enter all fields');
        isValid = false;
    }

    if (!regexName.test(fullname)) {
        document.getElementById('full-name').style.borderBottom = '2px solid red'; 
        nameError.textContent = 'Your name is not a valid';
        isValid = false;
    } else {
        document.getElementById('full-name').style.borderBottom = '1px solid black'; 
    }

    if (number < 1 || number > 10) {
        document.getElementById('guest-number').style.borderBottom = '2px solid red'; 
        guestError.textContent = 'Guests must be between 1 and 10';
        revError.textContent = '  ';
        isValid = false;
    } else {
        document.getElementById('guest-number').style.borderBottom = '1px solid black'; 
    }

    if (!regexPhone.test(phoneNumber)) {
        document.getElementById('phone-number').style.borderBottom = '2px solid red';
        phoneError.textContent = 'Your phone number is invalid';
        isValid = false;
    } else {
        document.getElementById('phone-number').style.borderBottom = '1px solid black';
    }

    return isValid;
}

