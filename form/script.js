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
})