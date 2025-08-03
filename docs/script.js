document.getElementById('resume-form').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent actual form submission

  // Collect form data
  const fullName = document.getElementById('name').value;
  const jobTitle = document.getElementById('jobTitle').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  const education = document.getElementById('education').value;
  const skills = document.getElementById('skills').value;
  const summary = document.getElementById('summary').value;
  const experience = document.getElementById('experience').value;
  const references = document.getElementById('references').value;

  // Store data in localStorage (as strings):contentReference[oaicite:15]{index=15}
  localStorage.setItem('fullName', fullName);
  localStorage.setItem('jobTitle', jobTitle);
  localStorage.setItem('email', email);
  localStorage.setItem('phone', phone);
  localStorage.setItem('address', address);
  localStorage.setItem('education', education);
  localStorage.setItem('skills', skills);
  localStorage.setItem('summary', summary);
  localStorage.setItem('experience', experience);
  localStorage.setItem('references', references);

  // Handle profile picture file
  const fileInput = document.getElementById('profile-pic');
  if (fileInput.files.length > 0) {
    const reader = new FileReader();
    reader.onload = function() {
      // Save Base64-encoded image to localStorage:contentReference[oaicite:16]{index=16}
      localStorage.setItem('profilePic', reader.result);
      // Open resume in new tab after saving image
      window.open('../resume/resume.html', '_blank');
    };
    reader.readAsDataURL(fileInput.files[0]); // Read file as Data URL
  } else {
    // No image file selected; just open resume page
    window.open('../resume/resume.html', '_blank');
  }
});
