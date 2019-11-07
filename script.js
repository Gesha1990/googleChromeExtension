let paragraphs = document.getElementsByTagName('input')

for (elt of paragraphs) {
  elt.addEventListener('keydown', bindEvent)
  elt.style['background-color'] = '#FF00FF'
}

function bindEvent(event) {
  if (event.keyCode == 32) {
    var string = event.target.value;
    var newString = '';

    if (string.indexOf("Foo") + 1) {
      newString = string.replace(/Foo/i, 'bar');
      event.target.value = newString;
    } else if (string.indexOf("Cat") + 1) {
      newString = string.replace(/Cat/i, 'Dog');
      event.target.value = newString;
    } else if (string.indexOf("Helo") + 1) {
      newString = string.replace(/Helo/i, 'Hello');
      event.target.value = newString;
    } else if (string.indexOf("heldp") + 1) {
      newString = string.replace(/heldp/i, 'help');
      event.target.value = newString;
    }
  }
}
