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
    { id: 12, name: "Richard", age: 37 },
  ];

  const renderTable = (data) => {
    const tableHeaders = Object.keys(data[0]);

    const thead =
      document.querySelector("thead") || document.createElement("thead");
    const headerTr = document.createElement("tr");
    for (const heading of tableHeaders) {
      const th = document.createElement("th");
      th.innerHTML = heading;
      headerTr.appendChild(th);
    }
    thead.appendChild(headerTr);

    const tbody =
      document.querySelector("tbody") || document.createElement("tbody");

    for (const row of data) {
      const bodyTr = document.createElement("tr");
      for (const prop of Object.keys(row)) {
        const bodyTd = document.createElement("td");
        bodyTd.textContent = row[prop];
        bodyTr.appendChild(bodyTd);
      }

      tbody.appendChild(bodyTr);
    }
  };

  renderTable(data);
};
