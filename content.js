function preventTextareaSubmitOnEnter() {
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && event.target.tagName === 'TEXTAREA') {
      if (event.metaKey || event.ctrlKey) {
        return;
      }
      event.stopPropagation();
    }
  }, true);
}

function autoSaveTextareaContent() {
  let firstKeystroke = true;

  const intervalId = setInterval(() => {
    const textarea = document.querySelector('textarea');
    if (textarea) {
      clearInterval(intervalId);  // Stop the interval once the textarea is found

      // Save content on every keystroke
      textarea.addEventListener('input', () => {
        localStorage.setItem('textarea', textarea.value);
      });

      // Clear saved content if the first keystroke is 'Backspace' or 'Delete'
      textarea.addEventListener('keydown', (event) => {
        if (firstKeystroke && (event.key === 'Backspace' || event.key === 'Delete')) {
          textarea.value = '';
          localStorage.removeItem('textarea');
        }
        firstKeystroke = false;
      });

      // Attempt to populate the textarea with saved content
      const savedContent = localStorage.getItem('textarea');
      if (savedContent) {
        const inputEvent = new Event('input', { 'bubbles': true, 'cancelable': true });
        textarea.value = savedContent;
        textarea.dispatchEvent(inputEvent);
      }

      const updateInterval = setInterval(() => {
        textarea.value = savedContent;
      }, 100);

      setTimeout(() => {
        clearInterval(updateInterval);
      }, 500);
    }
  }, 500);  // Check every half-second
}

// Call the functions to activate the behaviors
preventTextareaSubmitOnEnter();
autoSaveTextareaContent();
