// Demo contact form behavior: validate and show a fake "sent" message
function submitForm(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if(!name||!email||!message){ alert('Please complete all fields.'); return false; }
  alert('Thanks, ' + name + '! This is a demo form — integrate a backend or service (Formspree, Netlify Forms, Google Forms) to receive messages.');
  document.getElementById('contactForm').reset();
  return false;
}
