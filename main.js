// For navigation
function openCity(evt, cityName) {
    let i, tabcontent, tablinks;

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "")
    }

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none"
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}



// For Button

let buttons = document.getElementsByTagName('a');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
        // alert('Thank you for your purchase');
        document.getElementById("modal2").style.opacity="100%"
    };

}

// Products
document.getElementById("Iphone14").addEventListener("click", function() {

    document.querySelector('.text').innerHTML = "Iphone14";

    const characteristics = {
        Chip: "A15 Bionic chip",
        memory: 128 + "GB" + " - " + 512 + "GB",
        display: "Super Retina XDR display"
    };

    document.querySelector('.Characters').innerHTML = characteristics.Chip + ", " + characteristics.memory + ", " + characteristics.display;
    document.querySelector('.Buy').innerHTML = "Buy this";

});

document.getElementById("Iphone13").addEventListener("click", function() {

    document.querySelector('.text').innerHTML = "Iphone13";

    const characteristics = {
        Chip: "A15 Bionic chip",
        memory: 128 + "GB" + " - " + 512 + "GB",
        display: "Super Retina XDR display"
    };

    document.querySelector('.Characters').innerHTML = characteristics.Chip + ", " + characteristics.memory + ", " + characteristics.display;
    document.querySelector('.Buy').innerHTML = "Buy this";

});

document.getElementById("Iphone12").addEventListener("click", function() {

    document.querySelector('.text').innerHTML = "Iphone12";

    const characteristics = {
        Chip: "A15 Bionic chip",
        memory: 128 + "GB" + " - " + 512 + "GB",
        display: "Super Retina XDR display"
    };

    document.querySelector('.Characters').innerHTML = characteristics.Chip + ", " + characteristics.memory + ", " + characteristics.display;
    document.querySelector('.Buy').innerHTML = "Buy this";

});

document.getElementById("SamsungA53").addEventListener("click", function() {

    document.querySelector('.text2').innerHTML = "Samsung A53";

    const characteristics = {
        Chip: "A15 Bionic chip",
        memory: 128 + "GB" + " - " + 256 + "GB",
        display: "Li-Po 5000 mAh, non-removable"
    };

    document.querySelector('.Characters2').innerHTML = characteristics.Chip + ", " + characteristics.memory + ", " + characteristics.display;
    document.querySelector('.Buy2').innerHTML = "Buy this";

});

document.getElementById("Huawei").addEventListener("click", function() {

    document.querySelector('.text3').innerHTML = "Huawei Nova Y90";

    const characteristics = {
        Chip: "Li-Po 5000 mAh, non-removable",
        memory: 6 + "GB" + " - " + 128 + "GB",
        display: "IPS LCD, 90Hz"
    };

    document.querySelector('.Characters3').innerHTML = characteristics.Chip + ", " + characteristics.memory + ", " + characteristics.display;
    document.querySelector('.Buy3').innerHTML = "Buy this";

});




// Get the modal
// let modal = document.getElementById("myModal");
//
// // Get the button that opens the modal
// let btn = document.getElementById("Iphone14");
//
// // Get the <span> element that closes the modal
// let span = document.getElementsByClassName("close")[0];
//
// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//     modal.style.display = "block";
// }
//
// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }
//
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }




// // Validation
// const username = document.getElementById("fname");
//
// const showError = (input, msg) => {
//     const formControl = input.parentElement;
//     const small = formControl.querySelector("small");
//     formControl.classList.add("error");
//     small.textContent = msg;
// };
//
// const showSuccess = (input) => {
//     const formControl = input.parentElement;
//     formControl.classList.add("success");
// };
//
// const checkEmail = (input) => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     if (re.test(input)) {
//         showSuccess(input);
//     } else {
//         showError(input, "Email address is invalid. ");
//     }
// };
//
// const checkPasswordMatch = (input1, input2) => {
//     if (input1.value !== input2.value) {
//         showError(input1, "Passwords must match");
//     } else {
//         showSuccess(input1);
//     }
// };
//
// const getFieldName = (input) => {
//     const firstLetter = input.id.charAt(0).toUpperCase();
//     return firstLetter + input.id.slice(1);
// };
//
// const checkLength = (input, min, max) => {
//     if (input.value.length < min || input.value.length > max) {
//         showError(
//             input,
//             `${getFieldName(
//                 input
//             )} must be between ${min} and ${max} characters long`
//         );
//     }
// };
//
// const checkRequired = (inputArr) => {
//     inputArr.forEach((input) => {
//         if (input.value.trim() === "") {
//             showError(input, `${getFieldName(input)} is required`);
//         } else {
//             showSuccess(input);
//         }
//     });
// };
//
// const validateForm = () => {
//     checkRequired([username, email, password, passwordConfirmation]);
//     checkLength(username, 3, 20);
//     checkLength(password, 8, 30);
//     checkEmail(email);
//     checkPasswordMatch(passwordConfirmation, password);
// };
//
// form.addEventListener("submit", function (e) {
//     e.preventDefault();
//     validateForm();
// });