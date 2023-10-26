function preventTextareaSubmitOnEnter() {
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && event.target.tagName === 'TEXTAREA') {
      if (event.metaKey || event.ctrlKey) {
        // Allow form submission if Cmd+Enter or Ctrl+Enter is pressed
        return;
      }
      event.stopPropagation();
    }
  }, true);
}

preventTextareaSubmitOnEnter();
