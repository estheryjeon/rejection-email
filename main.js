function newEmail() {

  var app = document.getElementById("app").value;
  var role = document.getElementById("role").value;
  var company = document.getElementById("company").value;

  var subjectLine = [
    'Your ' + company + ' Application',
    'Update From ' + company,
    'Update on your application to ' + company,
    'Your application for the ' + role + ' at ' + company,
    app + ', an update on your ' + company + ' application',
    company + ', your application for ' + role,
    'Thank you for your interest in ' + company,
    'Your application for ' + role + ' at ' + company,
    'Important information about your application to ' + company,
    company + ' Human Resources',
    company + ' | ' + role,
    'Your application for ' + role + ' at ' + company,
    'Update on your ' + company + ' application for ' + role,
    company + ' Application',
    'Thank you from ' + company,
    'Your application for ' + role + ' at ' + company,
    'Thank You From ' + company,
    company + ' application update',
    'Thank you for your interest in ' + company
  ]

  var address = [
    'Dear ' + app + ',',
    'Hi ' + app + ',',
    'Dear ' + app + ':',
    'Hi there,',
    'Hello ' + app + ','
  ]

  var thanks = [
    'Thank you so much for your interest in the ' + role + ' at ' + company + '.',
    'Thanks for your application to ' + company + '!',
    'Thank you for your interest in ' + company + '.',
    'Thank you for your interest in the ' + role + ' position at ' + company + '. We appreciate your time and consideration.',
    'Thank you so much for taking the time to apply for the ' + role + ' opportunity and for pursuing ' + company + ' as a next step in your career.',
    'Thank you for your interest in the ' + role + ' opening.',
    'I wanted to thank you for applying to the ' + role + ' role on ' + company + '.',
    'Thank you so much for your time and strong interest in ' + company + '.',
    'We appreciate your interest in ' + company + ' and the time you have invested in applying for the ' + role + ' position.',
    'Thank you for your interest in the ' + role + ' position at ' + company + '.',
    'Thank you for considering career opportunities at ' + company + '. We\'re happy that you found your way to us!',
    'Thank you for taking the time to connect with us for the ' + role + ' position here with ' + company + '.',
    'Thank you again for your interest in ' + company + ', and for taking the time to apply to our ' + role + ' opening.',
    'Thank you for giving us the opportunity to consider you for employment.',
    'Thank you for your interest in the ' + role + ' position with ' + company + '.'
  ]

  var body = [
    'As you can imagine, we’ve received tremendous interest in this position and unfortunately, we have decided not to proceed with your candidacy. Although we never like to share unwelcome news, we wanted to let you know as soon as we were able.',
    'After reviewing numerous applications, we decided to move forward with other candidates at this time. We hope you will consider us for future opportunities. Meanwhile, best of luck with your job search!',
    'We’ve decided to move forward with a different candidate for the ' + role + ' position.',
    'We have reviewed your background and qualifications, from which it\'s clear to see you\'ve engaged in some interesting projects. However, we\'ve determined we have a few other candidates under consideration who are a closer match at this time. As a result, we will not be moving forward in the interview process. Please keep an eye out on our careers page for future opportunities!',
    'After thoughtful consideration we have decided to move forward with another candidate that we feel is the best fit for this role.' + company + ' is growing and we are updating our Jobs Page on a regular basis, so we encourage you to keep an eye out for new openings. Also, make sure to subscribe to our Talent Pool for updates on openings and events.',
    'At this time, we decided to move forward with other candidates. Your resume will remain accessible to the recruiters on our team and we\'ll be sure to consider your background for other roles within ' + company + '. We also encourage you to keep a close eye on our website and apply for any roles that are a strong match.',
    'I\'m sorry that you were not selected for the internship. We reviewed applications from many talented candidates like yourself, with compelling backgrounds and clear passion and determination. Ultimately, we based our decision on who would best fit the needs of this particular position. I sincerely hope that you continue to follow your passion as you grow in your career. We never want to discourage career growth or exploration, so if you see any openings that pique your interest, now or in the future, I hope you’ll keep ' + company + ' in mind.',
    'At this time, we have decided not to move forward with your application. Please feel free to learn about other opportunities at ' + company + ' by visiting https://www.' + company + '.com/company/' + company + '/careers.',
    'Unfortunately, we have decided not to proceed with your candidacy at this time for the ' + role + ' at ' + company + '. Please feel free to apply for any other position you feel might be a fit for your skill set on our careers page.',
    'After careful consideration, you were not selected for an interview. Your resume will be retained for a reasonable period of time and you will be contacted in the event our employment needs should change.',
    'We are, both, grateful and flattered for your willingness to invest the time you did in helping us understand your fit for the ' + role + '.  At this time, we\'ve decided to move forward with another candidate. I hope you\'ll keep an eye on our career site and consider applying to other suitable roles in the future!',
    'We have reviewed your application and resume, and after careful consideration we regret that we are unable to offer you an interview at this time. We would like to take this opportunity to wish you every success with your job search and to once again thank you for your interest in ' + company + '.',
    'As promised, we reviewed your application materials with the hiring team. While we feel there could be potential for you to contribute at ' + company + ' in the future, we have decided to move forward with candidates who more closely align with our current need.',
    'We have reviewed your background and qualifications and find that we do not have an appropriate position for you at this time. We appreciate your interest in ' + company + ' and wish you success in your job search.',
    'We want to thank you for taking the time to consider ' + company + ' and interview with us. While the interview team was impressed with your skills and really enjoyed getting to know you, after careful review, we have determined that we do not have a position that is a strong match at this time. I\'d be very happy to personally keep your resume on file for future opportunities. We\'d love to revisit your candidacy again in the future. Perhaps we can touch base again a few months down the line?',
    'The hiring team carefully reviewed your background and experience, and at the present time, they have decided to move forward in the process with other candidates. We encourage you to continue exploring career opportunities with ' + company + ' by visiting our career site at www.' + company + '.com/jobs. We also have your resume saved in our database for future consideration and may reach out if your background is a fit for any new opportunities.',
    'We have reviewed your application and have decided to pursue another candidate for the position at this time. However, feel free to reapply for a future opportunity.',
    'We appreciate the time you took to introduce yourself to us.  We have reviewed your application and determined your experience is not currently a fit at this time. However, we continue to grow rapidly and our needs may change in the future. Please feel free to stay up to date with additional opportunities on our careers page.'
  ]

  var wellWishes = [
    'Thanks again for your interest in ' + company + ' and we wish you luck in your search.',
    'We appreciate your time and application and wish you best in your endeavors.',
    'Thanks again for your interest in ' + company + ', and we wish you luck in your internship search.',
    'We appreciate your interest and we wish you all the best!',
    'We wish you well in your pursuit of a new opportunity. Thank you again for your time and interest.',
    'Thanks again for your interest in working at ' + company + '. I wish you a productive and fulfilling summer.',
    'Best of luck for the future.',
    'Thanks again for your interest in ' + company + ' and we wish you luck in your search.',
    'We wish you the best of luck with your job search and professional future endeavors.',
    'Thank you again for your interest in ' + company + '.',
    'This does not mean it’s a “no for ' + company + '", but rather a "not now." We wish you the best of luck in finding a fulfilling opportunity that will challenge and excite you.',
    'Once again, our sincere thanks for your interest in ' + company + ' and we look forward to staying in touch!',
    'Thanks again for your interest in our unique culture and the careers that ' + company + ' has to offer. We hope you will remain enthusiastic about our company.',
    'We wish you the best of luck as you continue your search!'
  ]

  var signOff = [
    'Regards, The ' + company + ' team',
    'Sincerely, Recruiting Team @ '+ company,
    company,
    'Best Regards, The ' + company + ' Talent Acquisition Team',
    'The ' + company + ' Team',
    'Best regards, ' + company + ' Recruiting',
    'Kindest regards, The ' + company + ' Talent Acquisition Team',
    'Regards, ' + company,
    'Sincerely, ' + company + ' Human Resources',
    'Sincerely, The ' + company + ' Recruiting Team',
    'Warmly, ' + company + ' Recruiting @' + company + 'jobs',
    'Thank you, ' + company + ' Recruiting',
    'Sincerely, ' + company + ' Recruiting',
    'Best regards, ' + company
  ]

  /* get elements */
  var randomSubjectLine = Math.floor(Math.random() * (subjectLine.length));
  var randomAddress = Math.floor(Math.random() * (address.length));
  var randomThanks = Math.floor(Math.random() * (thanks.length));
  var randomBody = Math.floor(Math.random() * (body.length));
  var randomWellWishes = Math.floor(Math.random() * (wellWishes.length));
  var randomSignOff = Math.floor(Math.random() * (signOff.length));

  /* email */
  var email = '<span class="title" id="highlight">' + subjectLine[randomSubjectLine] + '</span>'+ '<br><br><br>' +
  address[randomAddress] + '<br><br>' + thanks[randomThanks] +
  '<br><br>' + body[randomBody] + '<br><br>' + wellWishes[randomWellWishes] +
  '<br><br><br>' + signOff[randomSignOff];

  /* display email */
  document.getElementById('emailDisplay').innerHTML = email;

}
