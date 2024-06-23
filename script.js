document.getElementById('myForm').addEventListener('Submit', function(event){

  //prevent the form from submitting
  event.preventDefault();

  let hasError = false;

  const firstnameInput = document.getElementById('firstName'); 
  const lastnameInput = document.getElementById('lastName'); 
  const emailInput = document.getElementById('email');
  const queries = document.querySelectorAll('input[name = "queryType"]');
  const messageInput = document.getElementById('Input-Types-message');
  const consentInput = document.getElementById('checkbox');


  const firstnameError = document.getElementById('FirstName-error'); 
  const lastnameError = document.getElementById('LastName-error'); 
  const emailError = document.getElementById('emailError');
  const queryError = document.getElementById('queryError');
  const messageError = document.getElementById('messageError');
  const consentError = document.getElementById('consentError');

  //validate first Name
  if(firstnameInput.ariaValueMax.trim() === ''){
    firstnameInput.classList.add('error');
    firstnameError.style.display = 'block';
    hasError = 'true';
  } else{
    firstnameInput.classList.remove('error');
    firstnameError.style.display = 'none';
  }

  //validate Last Name
  if(lastnameInput.ariaValueMax.trim() === ''){
    lastnameInput.classList.add('error');
    lastnameError.style.display = 'block';
    hasError = 'true';
  } else{
    lastnameInput.classList.remove('error');
    lastnameError.style.display = 'none';
  }

  //validate email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailPattern.test(emailInput.value.trim())){
    emailInput.classList.add('error');
    emailError.style.display = 'block';
    hasError = true;
  }else{
    emailInput.classList.remove('error');
    emailError.style.display = 'none';
  }

  //validate query
  const isQuerySelected = Array.from(queries).some(radio=>radio.checked);

  if(!isQuerySelected){
    queryError.style.display = 'block';
    hasError = 'true';
  }else{
    queryError.style.display = 'none';
  }

  //validate message input
  if(messageInput.ariaValueMax.trim() === ''){
    messageInput.classList.add('error');
    messageError.style.display = 'block';
    hasError = 'true';
  } else{
    messageInput.classList.remove('error');
    messageError.style.display = 'none';
  }
  
  //validate consent
  if(!consentInput.checked){
    consentError.style.display = 'block';
    hasError = true;
  }else{
    consentError.style.display = 'none';
  }


  if(!hasError){
    //no error, so submit
    alert('form submitted');
  }

  

});

// console.log('dbhv');