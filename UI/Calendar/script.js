window.onload = () => {
  const calendarHeadMonth = document.getElementById("header-month");
  const calendarHeadYear = document.getElementById("header-year");
  const calendarMonth = document.getElementById("calendar-month");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  const selectedDate = document.getElementById("calendar-selected-date");

  let date = new Date();
  let month = date.getMonth();
  let formattedMonth = new Intl.DateTimeFormat("en-US", { month: "long" }).format(date);
  let year = date.getFullYear();
  let firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  let today = date.getDate();

  const handleArrowClick = (e) => {
    calendarMonth.innerHTML = "";
    calendarHeadMonth.innerHTML = "";
    calendarHeadYear.innerHTML = "";

    if (e.target.id === "prev") {
      console.log(month);
      if (month === 0) {
        month = 11;
        year -= 1;
      } else {
        month -= 1;
      }
    } else if (e.target.id === "next") {
      console.log(month);
      if (month === 11) {
        month = 0;
        year += 1;
      } else {
        month += 1;
      }
    }

    renderHeaderDate();
    renderMonthDays();
  };

  const upperMonth = (str) => {
    return str[0].toLocaleUpperCase() + str.slice(1);
  };

  const daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  const renderHeaderDate = () => {
    calendarHeadMonth.textContent = upperMonth(formattedMonth);
    calendarHeadYear.textContent = year;
  };
  renderHeaderDate();

  const renderMonthDays = () => {
    for (let i = 1; i < firstDayOfMonth; i += 1) {
      const dayOfPreviousMonth = document.createElement("div");
      dayOfPreviousMonth.classList.add("calendar-month-day");
      calendarMonth.appendChild(dayOfPreviousMonth);
    }

    for (let i = 1; i <= daysInMonth(month, year); i += 1) {
      const calendarMonthDay = document.createElement("div");
      calendarMonthDay.textContent += i;
      if (i === today) {
        calendarMonthDay.classList.add("calendar-month-today");
      }
      calendarMonthDay.classList.add("calendar-month-day");
      calendarMonth.appendChild(calendarMonthDay);
    }
  };
  renderMonthDays();

  const setSelectedDate = () => {
    selectedDate.textContent = `${today < 10 ? "0" + today : today} ${month} ${year}`;
  };
  setSelectedDate();

  prev.addEventListener("click", handleArrowClick);
  next.addEventListener("click", handleArrowClick);
};
