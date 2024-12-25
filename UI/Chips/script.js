window.onload = () => {
  const chipsCloud = document.querySelector("#chips-cloud");
  const input = document.querySelector("#input");
  const button = document.querySelector("#button");

  const handleChipRemoval = (e) => {
    const allChips = Array.from(document.getElementsByClassName("chip"));
    for (const chip of allChips) {
      if (e.target === chip) {
        chipsCloud.removeChild(chip);
      }
    }
  };

  const handleButtonClick = () => {
    const inputValue = input.value;
    if (inputValue.length < 1) {
      return;
    } else {
      const chip = document.createElement("div");
      chip.classList.add("chip");
      chip.textContent = inputValue;
      chip.addEventListener("click", handleChipRemoval);
      chipsCloud.appendChild(chip);
    }
  };

  button.addEventListener("click", handleButtonClick);
};
