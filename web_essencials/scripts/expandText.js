function expandText() {
  const button = document.getElementById('button-expand-text');
  const text = document.getElementById('second-paragraph');

  button.addEventListener('click', () => {
    text.style.display = 'flex';
    button.style.display = 'none';
  });
};

expandText();