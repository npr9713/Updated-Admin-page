function displayRequests() {
  // Retrieve stored requests from local storage
  var storedRequests = JSON.parse(localStorage.getItem("requests")) || [];

  // Get the table body element
  var tableBody = document
    .getElementById("requestTable")
    .getElementsByTagName("tbody")[0];

  // Clear existing rows in the table
  tableBody.innerHTML = "";

  // Loop through stored requests and add rows to the table
  storedRequests.forEach(function (request) {
    var newRow = tableBody.insertRow(tableBody.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);

    cell1.innerHTML = request.serialNumber; // Assuming serialNumber is stored in your request object
    cell2.innerHTML = request.dateTime;
    cell3.innerHTML = request.station;
    cell4.innerHTML = request.device;
    cell5.innerHTML = request.deviceNumber;
    cell6.innerHTML = request.faultDescription;
    cell7.innerHTML = request.faultAckNumber;
  });
  filterRequests();
}
function filterRequests() {
  // Retrieve stored requests from local storage
  var storedRequests = JSON.parse(localStorage.getItem("requests")) || [];

  // Get the selected station from the filter dropdown
  var selectedStation = document.getElementById("stationFilter").value;

  // Get the table body element
  var tableBody = document
    .getElementById("requestTable")
    .getElementsByTagName("tbody")[0];

  // Clear existing rows in the table
  tableBody.innerHTML = "";

  // Filter requests based on the selected station
  var filteredRequests = storedRequests.filter(function (request) {
    return selectedStation === "" || request.station === selectedStation;
  });

  // Loop through filtered requests and add rows to the table
  filteredRequests.forEach(function (request) {
    var newRow = tableBody.insertRow(tableBody.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);

    cell1.innerHTML = request.serialNumber;
    cell2.innerHTML = request.dateTime;
    cell3.innerHTML = request.station;
    cell4.innerHTML = request.device;
    cell5.innerHTML = request.deviceNumber;
    cell6.innerHTML = request.faultDescription;
    cell7.innerHTML = request.faultAckNumber;
  });
}

// Call the displayRequests function when the view page loads
window.onload = function () {
  displayRequests();
};
