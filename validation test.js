const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#password-confirmation");
const city = document.querySelector("#city");

const showError = (input, msg) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.classList.add("error");
    small.textContent = msg;
};

const showSuccess = (input) => {
    const formControl = input.parentElement;
    formControl.classList.add("success");
};

const checkEmail = (input) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input)) {
        showSuccess(input);
    } else {
        showError(input, "Email address is invalid. ");
    }
};

let illegalChars = [',', '#', '-', '/', " ",
    '!', '@', '$', "%",  '^',
    '*', '(', ")", "{",  '}',
    '|', '[', "]" , "\\"];
const checkCity  = (input) => {
    // for(let i = 0; i < illegalChars.length; i++) {
    //     if(s == illegalChars[i]) return true;
    // }
    // return false;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input)) {
        showSuccess(input);
    } else {
        showError(input, "City address is invalid. ");
    }
}



const checkPasswordMatch = (input1, input2) => {
    if (input1.value !== input2.value) {
        showError(input1, "Passwords must match");
    } else {
        showSuccess(input1);
    }
};

const getFieldName = (input) => {
    const firstLetter = input.id.charAt(0).toUpperCase();
    return firstLetter + input.id.slice(1);
};

const checkLength = (input, min, max) => {
    if (input.value.length < min || input.value.length > max) {
        showError(
            input,
            `${getFieldName(
                input
            )} must be between ${min} and ${max} characters long`
        );
    }
};

const checkRequired = (inputArr) => {
    inputArr.forEach((input) => {
        if (input.value.trim() === "") {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
};

const validateForm = () => {
    checkRequired([username, email, city, password, passwordConfirmation]);
    checkLength(username, 3, 20);
    checkLength(password, 8, 30);
    checkEmail(email);
    checkCity(city);
    checkPasswordMatch(passwordConfirmation, password);
};

form.addEventListener("submit", function (e) {
    e.preventDefault();
    validateForm();
});




function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
