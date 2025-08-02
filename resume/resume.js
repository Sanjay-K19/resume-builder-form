// Fill in the resume from localStorage when the page loads
document.addEventListener('DOMContentLoaded', function() {
  const fullName = localStorage.getItem('fullName') || '';
  const email = localStorage.getItem('email') || '';
  const phone = loalStorage.getItem('phone') || '';
  const jobTitle = localStorage.getItem('jobTitle') || '';
  const address = localStorage.getItem('address') || '';
  const education = localStorage.getItem('education') || '';
  const skills = localStorage.getItem('skills') || '';
  const summary = loalStorage.getItem('summary') || '';
  const experience = localStorage.getItem('experience') || '';
  const reference = loalStorage.getItem('reference') || '';
  const profilePic = localStorage.getItem('profilePic');

  // Set header fields
document.getElementById('fullName').textContent = fullName;
document.getElementById('jobTitle').textContent = jobTitle;

// Set contact info
document.getElementById('email').textContent = email;
document.getElementById('phone').textContent = phone;
document.getElementById('address').textContent = address;

// Set education, summary, experience, reference
document.getElementById('education').textContent = education;
document.getElementById('summary').textContent = summary;
document.getElementById('experience').textContent = experience;
document.getElementById('reference').textContent = reference;
})

