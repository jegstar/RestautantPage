export default function makeContact() {
  const content = document.createElement('div');
  content.classList.add('contact');
  content.innerText = 'Hi there';
  return content;
}
