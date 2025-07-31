document.getElementById('resume-form').addEventListener('submit', function(event) {
  event.preventDefault();   // prevent actual form submission

   //Collect data of the form
  const fullName = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const jobTitle = document.getElementById('jobTitle').value;
  const address = document.getElementById('address').value;
  const education = document.getElementById('education').value;
  const skills = document.getElementById('skills').value;
  const summary = document.getElementById('summary').value;
  const experience = document.getElementById('experience').value;
  const reference = document.getElementById('reference').value;

  //Store data in localStorage (as strings):contentReference
  [oaisite:15]{index=15}
  localStorage.setItem('fullName', fullName);
  localStorage.setItem('email', email);
  localStorage.setItem('phone', phone);
  localStorage.setItem('jobTitle', jobTitle);
  localStorage.setItem('address', address);
  localStorage.setItem('education', education);
  localStorage.setItem('skills', skills);
  localStorage.setItem('summary', summary);
  localStorage.setItem('experience', experience);
  localStorage.setItem('reference', reference);

  const fielInput = document.getElementById('profile-pic');
  if(fileInput.files.length > 0) {
    const reader = new FileReader();
    reader.onload = function() {
      // Save Base64-encoded image to localStorage:contentReference
      [oaicite:16]{index=16}
      localStorage.setItem('profile-pic', reader.result);
      window.open('../resume/resume.html'. '_blank');
    };
    reader.readAsDataURL(fileInput.files[0]);
  } else {
    window.open('../resume/resume.html', '_blank');
  }
});