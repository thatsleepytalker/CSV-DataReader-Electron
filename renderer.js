const fileInput = document.querySelector("#fileInput");
const contentDiv = document.querySelector("#content");

function displayCSV(data) {
  contentDiv.innerHTML = "";

  const table = document.createElement("table");

  data.forEach((row) => {
    const tr = document.createElement("tr");
    row.forEach((cell) => {
      const td = document.createElement("td");
      td.textContent = cell;
      tr.appendChild(td);
    });
    table.appendChild(tr);
  });

  contentDiv.appendChild(table);
}

fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  window.electron.parseCSV(file, displayCSV);
});
