window.onload = () => {
  const calendarHeadMonth = document.getElementById("header-month");
  const calendarHeadYear = document.getElementById("header-year");
  const calendarMonth = document.getElementById("calendar-month");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");

  let date = new Date();
  let month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(date);
  let year = date.getFullYear();
  let firstDayOfMonth = date.getDay();
  let today = date.getDate();

  const handleArrowClick = (e) => {
    console.log(e.target.id);
  };

  const upperMonth = (str) => {
    return str[0].toLocaleUpperCase() + str.slice(1);
  };

  const daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  const renderHeaderDate = () => {
    calendarHeadMonth.textContent = upperMonth(month);
    calendarHeadYear.textContent = year;
  };
  renderHeaderDate();

  const renderMonthDays = () => {
    for (let i = 1; i < firstDayOfMonth; i += 1) {
      const dayOfPreviousMonth = document.createElement("div");
      dayOfPreviousMonth.classList.add("calendar-month-day");
      calendarMonth.appendChild(dayOfPreviousMonth);
    }

    for (let i = 1; i <= daysInMonth(date.getMonth(), date.getFullYear()); i += 1) {
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

  prev.addEventListener("click", handleArrowClick);
  next.addEventListener("click", handleArrowClick);
};
