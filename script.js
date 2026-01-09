document.querySelectorAll('.day-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('active');
  });
});

