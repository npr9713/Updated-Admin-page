var pieChart;
function generatePieChart() {
  // Retrieve stored requests from local storage
  var storedRequests = JSON.parse(localStorage.getItem("requests")) || [];

  // Initialize data array for pie chart
  var data = [0, 0, 0, 0];

  // Loop through stored requests and update data array
  storedRequests.forEach(function (request) {
    switch (request.station) {
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
  });

  // Call the updatePieChart function with the updated data
  updatePieChart(data);
}

// Call the generatePieChart function when the dashboard page loads
window.onload = function () {
  generatePieChart();
};
function updatePieChart(data) {
  var labels = ["SWD", "SWN", "STV", "STT"];

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
