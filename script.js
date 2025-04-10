document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  const msg = document.getElementById('form-msg');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    msg.textContent = 'Mensagem enviada com sucesso! 😊';
    msg.style.color = 'green';
    form.reset();
  });
});
