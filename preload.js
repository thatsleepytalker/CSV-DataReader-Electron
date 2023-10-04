const { contextBridge, ipcRenderer } = require("electron");
const Papa = require("papaparse");

contextBridge.exposeInMainWorld("electron", {
  parseCSV: (file, callback) => {
    Papa.parse(file, {
      complete: function (results) {
        callback(results.data);
      },
    });
  },
});
