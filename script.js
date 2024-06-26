  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js"
  import { getDatabase,
    ref,
     push} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js"

  const firebaseConfig = {
      databaseURL: `${import.meta.env.VITE_APP_DATABASEURL}`
  };



  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app)
  console.log(database) 
  const referenceInDB = ref(database, "inputs")

  const firstnameInput = document.getElementById('firstName');
  const lastnameInput = document.getElementById('lastName');
  const emailInput = document.getElementById('email');
  const queries = document.querySelectorAll('input[name="queryType"]');
  // console.log(queries[0].value);
  const messageInput = document.getElementById('inputMessage');
  const consentInput = document.getElementById('checkbox');

  const firstnameError = document.getElementById('FirstName-error');
  const lastnameError = document.getElementById('LastName-error');
  const emailError = document.getElementById('emailError');
  const queryError = document.getElementById('queryError');
  const messageError = document.getElementById('messageError');
  const consentError = document.getElementById('consentError');


document.getElementById('myForm').addEventListener('submit', function(event) {
  // Prevent the form from submitting
  event.preventDefault();

  let hasError = false;

 

  // Validate first name
  if (firstnameInput.value.trim() === '') {
    firstnameInput.classList.add('error');
    firstnameError.style.display = 'block';
    hasError = true;
  } else {
    firstnameInput.classList.remove('error');
    firstnameError.style.display = 'none';
  }

  // Validate last name
  if (lastnameInput.value.trim() === '') {
    lastnameInput.classList.add('error');
    lastnameError.style.display = 'block';
    hasError = true;
  } else {
    lastnameInput.classList.remove('error');
    lastnameError.style.display = 'none';
  }

  // Validate email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailInput.classList.add('error');
    emailError.style.display = 'block';
    hasError = true;
  } else {
    emailInput.classList.remove('error');
    emailError.style.display = 'none';
  }

  // Validate query
  const isQuerySelected = Array.from(queries).some(radio => radio.checked);
  if (!isQuerySelected) {
    queryError.style.display = 'block';
    hasError = true;
  } else {
    queryError.style.display = 'none';
  }

  // Validate message input
  if (messageInput.value.trim() === '') {
    messageInput.classList.add('error');
    messageError.style.display = 'block';
    hasError = true;
  } else {
    messageInput.classList.remove('error');
    messageError.style.display = 'none';
  }

  // Validate consent
  if (!consentInput.checked) {
    consentError.style.display = 'block';
    hasError = true;
  } else {
    consentError.style.display = 'none';
  }

  if (!hasError) {
    // No error, so submit

    const person = {
      name : firstnameInput.value + lastnameInput.value,
      email: emailInput.value,
      queryType: queries[0].checked ? queries[0].value : queries[1].value,
      message: messageInput.value
    }
    console.log(queries[0].value)

    push(referenceInDB, person);
   

    
    // Show alert box
    const alertBox = document.getElementById('alertBox');
    const alertMessage = document.getElementById('alertMessage');
    // alertMessage.textContent = "Message sent! Thanks for completing the form. We will be in touch soon.";
    alertBox.style.display = 'block';
    

  }
});






