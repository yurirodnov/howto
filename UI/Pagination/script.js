window.onload = () => {
  const data = [
    { id: 1, name: "George", age: 31 },
    { id: 2, name: "Said", age: 19 },
    { id: 3, name: "Mia", age: 36 },
    { id: 4, name: "Phil", age: 30 },
    { id: 5, name: "Alexa", age: 43 },
    { id: 6, name: "Tom", age: 30 },
    { id: 7, name: "Jeff", age: 26 },
    { id: 8, name: "Emmy", age: 23 },
    { id: 9, name: "Hew", age: 21 },
    { id: 10, name: "Fatima", age: 38 },
    { id: 11, name: "Ginger", age: 29 },
    { id: 12, name: "Sam", age: 34 },
    { id: 13, name: "Tori", age: 25 },
    { id: 14, name: "Morgan", age: 29 },
    { id: 15, name: "Richard", age: 36 },
    { id: 16, name: "Lena", age: 28 },
  ];

  const maxRowsOnPage = 5;
  let currentPage = 1;

  const thead =
    document.querySelector("thead") || document.createElement("thead");
  const tbody =
    document.querySelector("tbody") || document.createElement("tbody");

  const renderTable = (data, rowsOnPage, currentPage = 1) => {
    const tableHeaders = Object.keys(data[0]);
    const startPosition = currentPage * rowsOnPage - rowsOnPage;
    console.log(startPosition);

    const headerTr = document.createElement("tr");
    for (const heading of tableHeaders) {
      const th = document.createElement("th");
      th.innerHTML = heading;
      headerTr.appendChild(th);
    }
    thead.appendChild(headerTr);

    for (let i = startPosition; i < currentPage * rowsOnPage; i += 1) {
      const bodyTr = document.createElement("tr");
      if (i < data.length) {
        for (const prop of Object.keys(data[i])) {
          const bodyTd = document.createElement("td");
          bodyTd.textContent = data[i][prop];
          bodyTr.appendChild(bodyTd);
        }
      } else {
        break;
      }

      tbody.appendChild(bodyTr);
    }
  };

  const renderButtons = (data, rowsOnPage) => {
    const paginationBlock = document.querySelector("#pagination");
    const pagesCount = Math.ceil(data.length / rowsOnPage);

    const buttonHandler = (e) => {
      const selectedPage = +e.target.textContent;
      thead.innerHTML = "";
      tbody.innerHTML = "";

      renderTable(data, maxRowsOnPage, selectedPage);
    };

    for (let i = 1; i <= pagesCount; i += 1) {
      const button = document.createElement("button");
      button.innerHTML = i;
      button.addEventListener("click", buttonHandler);
      paginationBlock.appendChild(button);
    }
  };

  renderTable(data, maxRowsOnPage, currentPage);
  renderButtons(data, maxRowsOnPage);
};
