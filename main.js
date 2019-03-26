$(document).ready(function() {

  var name = document.getElementsByName("name").value;
  var role = document.getElementsByName("role").value;
  var company = document.getElementsByName("company")[0].value;
  console.log(name);

  var subjectLine = [
    'Your ' + company + ' Application',
    'Update From ' + company,
    'Update on your application to ' + company,
    'Your application for the' + role + ' at ' + company,
    name + ', an update on your ' + company + ' application',
    company + ', your application for ' + role,
    'Thank you for your interest in ' + company,
    'Your application for ' + role + ' at ' + company,
    'Important information about your application to ' + company,
    company + ' Human Resources',
    company + ' | ' + role,
    'Your application for ' + role + ' at ' + company,
    'Update on your ' + company + 'application for ' + role,
    company + ' Application',
    'Thank you from ' + company,
    'Your application for ' + role + ' at ' + company,
    'Thank You From ' + company,
    company + ' application update',
    'Thank you for your interest in ' + company
  ]

  var address = [
    'Dear ' + name,
    'Hi ' + name,
    'Dear ' + name + ':',
    'Hi there',
    'Hello ' + name
  ]

  var thanks = [
    'Thank you so much for your interest in the ' + role + ' at ' + company + '.',
    'Thanks for your application to ' + company + '!',
    'Thank you for your interest in ' + company + '.'

  ]

  var body = [

  ]

  var wellWishes = [

  ]

  var signOff = [

  ]


});
