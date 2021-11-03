const textArea = document.getElementById('content');
const charactercount = document.getElementById('cCount');
const wordcount = document.getElementById('wCount');

textArea.oninput = () => {
  let chars = textArea.value;
  charactercount.textContent = chars.replace(/\s/g, '').length;

  let words = textArea.value.split(' ').filter((item) => {
    return item != '';

  });
  wordcount.textContent= words.length;
};
