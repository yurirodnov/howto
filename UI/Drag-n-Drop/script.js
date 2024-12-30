window.onload = () => {
  const cat = document.getElementById("cat");
  const ground = document.getElementById("ground");

  cat.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/uri-list", cat.src);
  });

  ground.addEventListener("dragover", (event) => {
    event.preventDefault();
    ground.style.borderColor = "blue";
  });

  ground.addEventListener("dragleave", () => {
    ground.style.borderColor = "#ccc";
  });

  ground.addEventListener("drop", (event) => {
    event.preventDefault();
    ground.style.borderColor = "#ccc";

    const imageUrl = event.dataTransfer.getData("text/uri-list");

    const img = document.createElement("img");
    img.src = imageUrl;
    img.style.maxWidth = "100%";
    img.style.maxHeight = "100%";

    cat.style.display = "none";
    ground.innerHTML = "";
    ground.appendChild(img);
  });
};
