// Populate resume from localStorage when the page loads
document.addEventListener('DOMContentLoaded', function() {
  // Retrieve values (or empty string if not set)
  const fullName = localStorage.getItem('fullName') || '';
  const jobTitle = localStorage.getItem('jobTitle') || '';
  const email = localStorage.getItem('email') || '';
  const phone = localStorage.getItem('phone') || '';
  const address = localStorage.getItem('address') || '';
  const education = localStorage.getItem('education') || '';
  const skills = localStorage.getItem('skills') || '';
  const summary = localStorage.getItem('summary') || '';
  const experience = localStorage.getItem('experience') || '';
  const references = localStorage.getItem('references') || '';
  const profilePic = localStorage.getItem('profilePic');

  // Set header fields
  document.getElementById('fullName').textContent = fullName;
  document.getElementById('jobTitle').textContent = jobTitle;

  // Set contact info
  document.getElementById('email').textContent = email;
  document.getElementById('phone').textContent = phone;
  document.getElementById('address').textContent = address;

  // Set education, summary, experience, references
  document.getElementById('education').textContent = education;
  document.getElementById('summary').textContent = summary;
  document.getElementById('experience').textContent = experience;
  document.getElementById('references').textContent = references;

  // Populate skills list (split by commas)
  const skillsList = document.getElementById('skills-list');
  skills.split(',').forEach(skill => {
    if (skill.trim() !== '') {
      const li = document.createElement('li');
      li.textContent = skill.trim();
      skillsList.appendChild(li);
    }
  });

  // Set profile picture if available
  const imgElem = document.getElementById('profilePic');
  if (profilePic) {
    imgElem.src = profilePic;  // data URL from localStorage
  } else {
    imgElem.style.display = 'none';  // hide if no image
  }
});

// "Edit Resume" button returns to form page
document.getElementById('editBtn').addEventListener('click', function() {
  window.location.href = '../index.html';
});
