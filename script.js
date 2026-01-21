AOS.init({
    duration: 900,
    once: true
  });
  
  const toggle = document.getElementById('themeToggle');
  const body = document.body;
  
  // Load theme dari localStorage
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    toggle.textContent = '☀️';
  } else {
    toggle.textContent = '🌙';
  }
  
  // Toggle dark / light
  toggle.addEventListener('click', () => {
    body.classList.toggle('dark');
  
    if (body.classList.contains('dark')) {
      toggle.textContent = '☀️';
      localStorage.setItem('theme', 'dark');
    } else {
      toggle.textContent = '🌙';
      localStorage.setItem('theme', 'light');
    }
  });
  