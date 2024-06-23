document.getElementById('myForm').addEventListener('submit', function (event) {

  // Prevent the form from submitting
  event.preventDefault();

  var hasError = false;

  // Validate first name
  if (document.getElementById('firstName').value.trim() === '') {
    document.getElementById('firstName').classList.add('error');
    document.getElementById('FirstName-error').style.display = 'block';
    hasError = true;
  } else {
    document.getElementById('firstName').classList.remove('error');
    document.getElementById('FirstName-error').style.display = 'none';
  }

  // Validate last name
  if (document.getElementById('lastName').value.trim() === '') {
    document.getElementById('lastName').classList.add('error');
    document.getElementById('LastName-error').style.display = 'block';
    hasError = true;
  } else {
    document.getElementById('lastName').classList.remove('error');
    document.getElementById('LastName-error').style.display = 'none';
  }

  // Validate email
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(document.getElementById('email').value.trim())) {
    document.getElementById('email').classList.add('error');
    document.getElementById('emailError').style.display = 'block';
    hasError = true;
  } else {
    document.getElementById('email').classList.remove('error');
    document.getElementById('emailError').style.display = 'none';
  }

  // Validate query
  var isQuerySelected = Array.prototype.some.call(document.querySelectorAll('input[name="queryType"]'), function (radio) {
    return radio.checked;
  });

  if (!isQuerySelected) {
    document.getElementById('queryError').style.display = 'block';
    hasError = true;
  } else {
    document.getElementById('queryError').style.display = 'none';
  }

  // Validate message input
  if (document.getElementById('Input-Types-message').value.trim() === '') {
    document.getElementById('Input-Types-message').classList.add('error');
    document.getElementById('messageError').style.display = 'block';
    hasError = true;
  } else {
    document.getElementById('Input-Types-message').classList.remove('error');
    document.getElementById('messageError').style.display = 'none';
  }

  // Validate consent
  if (!document.getElementById('checkbox').checked) {
    document.getElementById('consentError').style.display = 'block';
    hasError = true;
  } else {
    document.getElementById('consentError').style.display = 'none';
  }

  if (!hasError) {
    // No error, so submit
    alert('Form submitted successfully!');
  }

});
