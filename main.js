const form = document.getElementById('subscribe-form')
const subscribe = document.getElementById('subscribe')
const success = document.getElementById('success')

function handleSubmit(e) {
    e.preventDefault()

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data)

    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('error-message');

    if (!emailInput.checkValidity()) {
        errorMessage.textContent = 'Valid email required';
        errorMessage.style.display = 'block';
        emailInput.classList.add('submited')
    } else {
        errorMessage.style.display = 'none';
        subscribe.style.display = 'none';
        success.style.display = 'flex';
        const userEmail = document.getElementById('user-email')
        userEmail.textContent = emailInput.value
    }
}

form.addEventListener('submit', handleSubmit)