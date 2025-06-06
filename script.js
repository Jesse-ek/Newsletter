'use strict';
const emailInput = document.getElementById('email');
const errorMessage = document.querySelector('.error-message');
const subscribeButton = document.querySelector('.btn');
const successMessage = document.querySelector('.succes-message');
const formSection = document.querySelector('.form-section');
const dismissBtn = document.getElementById('dismiss-button');

const validateEmail = function(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.com$/i;
      return emailRegex.test(email);
    };

const error = function() {
    if(!emailInput.value) {
        errorMessage.classList.remove('hidden');
        emailInput.style.background = ('hsl(4, 48.10%, 69.80%)');       
    }  else if (!validateEmail(emailInput.value)) {
        errorMessage.classList.remove('hidden');
        emailInput.style.background = ('hsl(4, 48.10%, 69.80%)'); 
    } else {
        formSection.classList.add('hidden')
        successMessage.classList.remove('hidden')
        document.getElementById('confirmation-message').textContent =  `A confirmation email has been sent to ${emailInput.value}.
         Please open it and click the button inside to confirm your subscription.`
    }
};

const form = function() {
    if (emailInput.value) {
        errorMessage.classList.add('hidden');
        emailInput.style.background = 'none';
    }
};

const dismiss = function () {
    successMessage.classList.add('hidden');
    formSection.classList.remove('hidden');
    emailInput.value = '';
}

subscribeButton.addEventListener('click', error);

emailInput.addEventListener('input', form);

dismissBtn.addEventListener('click', dismiss);
