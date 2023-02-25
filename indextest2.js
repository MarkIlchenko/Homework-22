
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const city = document.getElementById('city');




const btn = document.querySelector('#btn');
// const radioButtons = document.querySelectorAll('input[name="size"]');
// btn.addEventListener("click", () => {
//
// });

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();


    if(usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');

    } else {
        setSuccessFor(username);
        document.getElementById("ptest").innerHTML = `Hello, ${usernameValue}!`;
    }

    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
    }





    if(city === '') {
        setErrorFor(city, 'Address cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(city, 'Not a valid address');
    } else {
        setSuccessFor(city);
    }




}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
// function isCity(city) {
//     return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(city);
// }



















function favTutorial() {
    let mylist = document.getElementById("myList");
    document.getElementById("favourite").value = mylist.options[mylist.selectedIndex].text;
}




// RadioButton
const sizes = ['Card', 'Cash'];

// generate the radio groups
const group = document.querySelector("#group");
group.innerHTML = sizes.map((size) => `<div>
                <input type="radio" name="size" value="${size}" id="${size}">
                 <label for="${size}">${size}</label>
            </div>`).join(' ');

// add an event listener for the change event
const radioButtons = document.querySelectorAll('input[name="size"]');
for(const radioButton of radioButtons){
    radioButton.addEventListener('change', showSelected);
}

function showSelected(e) {
    console.log(e);
    if (this.checked) {
        document.querySelector('#output').innerText = `You selected ${this.value}`;
    }
}





// TexArea
function getText() {


    let text = document.getElementById("textareabox").value;


    if(document.getElementById('textareabox').value == '')
    {

        document.getElementById("text-area").innerHTML = "Please Provide Details!";
        document.getElementById('textareabox').focus();
        return false;
    }
    else
        return document.getElementById("text-area-succes").innerHTML = "You typed:" + "       " + text;

}




// Price
function total() {
    let iphone14_1;
    let sum;
    iphone14_1 = parseInt(document.getElementById("iphone14_1").value);
    sum = (iphone14_1 * 1400) ;
    document.getElementById("total_cost").innerHTML = "USD "+sum+".00";

}


// Pop-up
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}


let app = document.querySelector('#app');

let langs = ['TypeScript','HTML','CSS'];

let nodes = langs.map(lang => {
    let li = document.createElement('li');
    li.textContent = lang;
    return li;
});

app.append(...nodes);









