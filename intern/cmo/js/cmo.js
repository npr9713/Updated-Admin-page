var pieChart;
var lineChart;

function generateSerialNumber() {
  var table = document.getElementById("requestTable");
  return table.rows.length + 1;
}
function getCurrentDateTime() {
  var now = new Date();
  return now.toLocaleString();
}

function submitRequest() {
  var station = document.getElementById("station").value;
  var device = document.getElementById("device").value;
  var deviceNumber = document.getElementById("deviceNumber").value;
  var faultDescription = document.getElementById("faultDescription").value;
  var faultAckNumber = document.getElementById("faultAckNumber").value;
  if (!station) {
    alert("please enter all values");
  }
  if (!device) {
    alert("please enter all values");
  }
  if (!deviceNumber) {
    alert("please enter all values");
  }
  if (!faultDescription) {
    alert("please enter all values");
  }
  if (!faultAckNumber) {
    alert("please enter all values");
  } else {
    alert("REQUEST SUBMITTED");
  }
  // Generate a serial number
  var serialNumber = generateSerialNumber();
  var dateTime = getCurrentDateTime();

  // Create a new row in the table with the submitted data
  var table = document
    .getElementById("requestTable")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.rows.length);
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);
  var cell6 = newRow.insertCell(5);
  var cell7 = newRow.insertCell(6);

  cell1.innerHTML = serialNumber;
  cell2.innerHTML = dateTime;
  cell3.innerHTML = station;
  cell4.innerHTML = device;
  cell5.innerHTML = deviceNumber;
  cell6.innerHTML = faultDescription;
  cell7.innerHTML = faultAckNumber;

  // Update charts
  updateCharts();

  // Clear the form fields after submission
  document.getElementById("requestForm").reset();
}

function updateCharts() {
  updatePieChart();
}

function updatePieChart() {
  var labels = ["SWD", "SWN", "STV", "STT"];
  var data = [0, 0, 0, 0];

  var table = document
    .getElementById("requestTable")
    .getElementsByTagName("tbody")[0];
  for (var i = 0; i < table.rows.length; i++) {
    var station = table.rows[i].cells[2].innerHTML; // Use the correct column index
    switch (station) {
      case "SWD":
        data[0]++;
        break;
      case "SWN":
        data[1]++;
        break;
      case "STV":
        data[2]++;
        break;
      case "STT":
        data[3]++;
        break;
    }
  }

  if (pieChart) {
    pieChart.destroy(); // Destroy existing chart instance
  }

  var ctx = document.getElementById("pie-chart").getContext("2d");

  pieChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: labels,
      datasets: [
        {
          data: data,
          backgroundColor: [
            "rgba(255, 99, 132, 0.8)",
            "rgba(54, 162, 235, 0.8)",
            "rgba(255, 206, 86, 0.8)",
            "rgba(75, 192, 192, 0.8)",
          ],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false, // Set to false to allow resizing
    },
  });
}
document.addEventListener("DOMContentLoaded", function () {
  showOverlayWithSpinner(1000); // 3000 milliseconds = 3 seconds
});

// Function to show overlay with a spinner for a specified duration
function showOverlayWithSpinner(duration) {
  var overlay = document.getElementById("overlay");
  overlay.style.display = "flex"; // Show the overlay

  // Hide the overlay after the specified duration
  setTimeout(function () {
    overlay.style.display = "none";
  }, duration);
}
