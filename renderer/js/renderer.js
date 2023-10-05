const toggleButton = document.querySelector(".toggle-button");
const mainContainer = document.querySelector(".main-container");
const sideContainer = document.querySelector(".side-container");
const dropArea = document.querySelector("#dropArea");
const fileInput = document.querySelector("#fileInput");
const contentDiv = document.querySelector(".content");

function handleFiles(files) {
  if (files.length) {
    // For now, just show the name of the first file. You can handle the file(s) as needed.
    alert(`You chose: ${files[0].name}`);
  }
}

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

// Handle the files when the file input changes
fileInput.addEventListener("change", (e) => {
  sideContainer.style.width = "720px";
  const file = e.target.files[0];
  window.electron.parseCSV(file, displayCSV);
});

// Handle the file when it's dropped
dropArea.addEventListener("drop", (e) => {
  e.preventDefault();
  sideContainer.style.width = "720px";
  const filed = e.target.files[0];
  window.electron.parseCSV(filed, displayCSV);
});

// Highlight the drop area when a file is dragged over it
dropArea.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropArea.classList.add("active");
});

// Reset the drop area when the file is dragged out
dropArea.addEventListener("dragleave", () => {
  dropArea.classList.remove("active");
});

// Open the file selector when the drop area is clicked
dropArea.addEventListener("click", () => {
  fileInput.click();
});

toggleButton.addEventListener("click", () => {
  if (sideContainer.style.width === "720px") {
    sideContainer.style.width = "0";
    toggleButton.textContent = "Open";
  } else {
    sideContainer.style.width = "720px";
    toggleButton.textContent = "Close";
  }
});
