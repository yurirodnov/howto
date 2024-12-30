window.onload = () => {
  const cat = document.getElementById("cat");

  const onMouseDown = (e) => {
    const catShiftX = e.clientX - cat.getBoundingClientRect().left;
    const catShiftY = e.clientY - cat.getBoundingClientRect().top;

    cat.style.position = "absolute";
    cat.style.zIndex = 1000;
    document.body.appendChild(cat);

    const catMoving = (pageX, pageY) => {
      cat.style.left = pageX - catShiftX + "px";
      cat.style.top = pageY - catShiftY + "px";
    };

    const onMouseMoving = (e) => {
      catMoving(e.pageX, e.pageY);
    };

    catMoving(e.pageX, e.pageY);

    document.addEventListener("mousemove", onMouseMoving);

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMoving);
      cat.onmouseup = null;
    };

    cat.addEventListener("mouseup", onMouseUp);
  };

  cat.ondragstart = () => false;

  cat.addEventListener("mousedown", onMouseDown);
};
