function loadData(callback) {
  setTimeout(() => {
    console.log("Data loaded");
    callback();
  }, 1000);
}

function showData() {
  console.log("Displaying data");
}

loadData(showData);
