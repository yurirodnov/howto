window.onload = () => {
  const calendarHeader = document.getElementById("header-date");
  const calendarMonth = document.getElementById("calendar-month");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  const selectedDate = document.getElementById("calendar-selected-date");

  const upperMonth = (str) => {
    return str[0].toLocaleUpperCase() + str.slice(1);
  };

  const daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();

  const renderData = () => {
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const firstDayPosition = firstDayOfMonth.getDay() === 0 ? 7 : firstDayOfMonth.getDay();
    const today = new Date().getDate();
    console.log(firstDayPosition);

    const dateForHeader = date.toLocaleString("en-US", {
      month: "long",
      year: "numeric",
    });

    calendarHeader.textContent = dateForHeader;

    for (let i = 1; i < firstDayPosition; i += 1) {
      const previousDay = document.createElement("div");
      previousDay.classList.add("calendar-month-day");
      calendarMonth.appendChild(previousDay);
    }

    for (let i = 1; i <= daysInMonth; i += 1) {
      const dayOfMonth = document.createElement("div");
      if (today === i && month === new Date().getMonth()) {
        dayOfMonth.classList.add("calendar-month-today");
      } else {
        dayOfMonth.classList.add("calendar-month-day");
      }

      dayOfMonth.textContent = i;
      calendarMonth.appendChild(dayOfMonth);
    }
  };

  renderData();

  const handleArrowClick = (e) => {
    calendarHeader.innerHTML = "";
    calendarMonth.innerHTML = "";

    if (e.target.id === "prev") {
      if (month < 0) {
        month = 11;
        year -= 1;
      }
      month -= 1;

      date.setMonth(month);
      renderData();
    } else if (e.target.id === "next") {
      if (month > 11) {
        month = 0;
        year += 1;
      }
      month += 1;

      date.setMonth(month);
      renderData();
    }
  };

  // const setSelectedDate = () => {
  //   selectedDate.textContent = `${today < 10 ? "0" + today : today} ${month} ${year}`;
  // };
  // setSelectedDate();

  prev.addEventListener("click", handleArrowClick);
  next.addEventListener("click", handleArrowClick);
};
