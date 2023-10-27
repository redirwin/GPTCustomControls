function preventTextareaSubmitOnEnter() {
  let spacePressed = false;

  document.addEventListener(
    "keydown",
    function (event) {
      // Check for Space keydown event
      if (event.key === " ") {
        spacePressed = true;
      }

      if (event.key === "Enter" && event.target.tagName === "TEXTAREA") {
        if (event.metaKey || event.ctrlKey || spacePressed) {
          localStorage.removeItem("textarea");
          return;
        }
        event.stopPropagation();
      }
    },
    true
  );

  // Reset spacePressed on keyup
  document.addEventListener(
    "keyup",
    function (event) {
      if (event.key === " ") {
        spacePressed = false;
      }
    },
    true
  );
}

preventTextareaSubmitOnEnter();
