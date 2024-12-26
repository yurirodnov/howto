window.onload = () => {
  const images = ["cat0.jpg", "cat1.jpg", "cat2.jpg", "cat3.jpg", "cat4.jpg"];
  const imagesLength = images.length;
  const currentImageNumber = document.getElementById("current-image");
  const allImagesNumber = document.getElementById("all-images");
  const sliderGallery = document.getElementById("slider-gallery");
  const image = document.createElement("img");
  let startImagePosition = 0;
  image.src = `./img/${images[startImagePosition]}`;
  image.width = 1000;
  image.alt = "Cat image";
  sliderGallery.appendChild(image);
  allImagesNumber.textContent = imagesLength;
  currentImageNumber.textContent = startImagePosition + 1;

  const handleImagesSwitching = (e) => {
    if (e.target.textContent === "Prev") {
      startImagePosition > 0
        ? (startImagePosition -= 1)
        : (startImagePosition = imagesLength - 1);

      image.src = `./img/${images[startImagePosition]}`;
      image.classList.add("active");
      currentImageNumber.textContent = startImagePosition + 1;
    } else if (e.target.textContent === "Next") {
      startImagePosition < imagesLength - 1
        ? (startImagePosition += 1)
        : (startImagePosition = 0);
      image.src = `./img/${images[startImagePosition]}`;
      currentImageNumber.textContent = startImagePosition + 1;
    }
  };

  const buttons = Array.from(document.getElementsByClassName("button"));
  buttons.forEach((buttons) =>
    buttons.addEventListener("click", handleImagesSwitching)
  );
};
