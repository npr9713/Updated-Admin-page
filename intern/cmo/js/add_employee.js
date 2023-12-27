function addEmployee() {
  var employeeName = document.getElementById("employeeName").value;
  var employeeId = document.getElementById("employeeId").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var emailId = document.getElementById("emailId").value;
  var password = document.getElementById("password").value;

  // Add the employee details to the table
  var table = document
    .getElementById("employeeTable")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.rows.length);
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);

  cell1.innerHTML = employeeId;
  cell2.innerHTML = employeeName;
  cell3.innerHTML = phoneNumber;
  cell4.innerHTML = emailId;
  cell5.innerHTML = password; // Displaying the password for illustration purposes

  // Clear the form fields after submission
  document.getElementById("employeeForm").reset();
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
