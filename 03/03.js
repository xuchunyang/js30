const [padInput, blurInput, colorInput] = document.querySelectorAll('input');

[padInput, blurInput, colorInput].forEach((element) => {
  element.addEventListener('change', handleUpdate);
});

function handleUpdate ({target: {name, value, dataset: {sizing: suffix = '' }}}) {
  console.log(`--${name}`, value + suffix)
  document.documentElement.style.setProperty(`--${name}`, value + suffix);
}
