function preventTextareaSubmitOnEnter() {
  document.addEventListener(
    "keydown",
    function (event) {
      if (event.key === "Enter" && event.target.tagName === "TEXTAREA") {
        if (event.metaKey || event.ctrlKey) {
          return;
        }
        event.stopPropagation();
      }
    },
    true
  );
}

preventTextareaSubmitOnEnter();
