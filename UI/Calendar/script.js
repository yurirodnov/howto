window.onload = () => {
  const calendar = document.getElementById("calendar");
  const calendarHead = document.getElementById("calendar-head");
  const calendarHeaderMonth = document.getElementById("header-month");
  const calendarYearMonth = document.getElementById("header-year");
  const calendarWeek = document.getElementById("calendar-week-days");
  const calendarWeekDay = document.getElementById("calendar-week-day");
  const calendarMonth = document.getElementById("calendar-month");
  const calendarSelectedDate = document.getElementById(
    "calendar-selected-date"
  );
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");

  const handleArrowClick = (e) => {
    console.log(e.target.id);
  };

  const renderMonthDays = () => {};

  // uppercase first letter for months
  const upperMonth = (str) => {
    return str[0].toLocaleUpperCase() + str.slice(1);
  };

  const daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  const date = new Date();
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    date
  );
  const year = date.getFullYear();

  for (let i = 1; i <= daysInMonth(date.getMonth(), year); i += 1) {
    console.log(i);
    const dayOfMonth = document.createElement("div");
    dayOfMonth.classList.add("day-of-month");
    dayOfMonth.textContent = i;
    calendarMonth.appendChild(dayOfMonth);
  }

  console.log(`Selected year is ${year} and month is ${month}`);
  calendarHeaderMonth.textContent = upperMonth(month);
  calendarYearMonth.textContent = year;

  prev.addEventListener("click", handleArrowClick);
  next.addEventListener("click", handleArrowClick);
};
