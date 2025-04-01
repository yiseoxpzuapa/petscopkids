    if (localStorage.getItem('doNotShowWarning') === 'true') {
    document.getElementById('warningMessage').style.display = 'none';
  }

  document.getElementById('doNotShowAgain').addEventListener('click', function() {
    if (this.checked) {
      localStorage.setItem('doNotShowWarning', 'true');
      newParagraph.appendChild(textNode);
      document.getElementById("aud").appendChild(newParagraph);
    } else {
      localStorage.removeItem('doNotShowWarning');
      document.getElementById('warningMessage').style.display = 'block';
    }
  });
