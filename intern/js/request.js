function getCurrentDateTime() {
  var now = new Date();
  return now.toLocaleString();
}
function generateSerialNumber() {
  // Retrieve the requests from local storage
  var storedRequests = JSON.parse(localStorage.getItem("requests")) || [];

  // Increment the serial number based on the number of requests
  var serialNumber = storedRequests.length + 1;

  return serialNumber;
}

function submitRequest() {
  var station = document.getElementById("station").value;
  var device = document.getElementById("device").value;
  var deviceNumber = document.getElementById("deviceNumber").value;
  var faultDescription = document.getElementById("faultDescription").value;
  var faultAckNumber = document.getElementById("faultAckNumber").value;
  if (!station) {
    alert("please enter all values");
  } else if (!device) {
    alert("please enter all values");
  } else if (!deviceNumber) {
    alert("please enter all values");
  } else if (!faultDescription) {
    alert("please enter all values");
  } else if (!faultAckNumber) {
    alert("please enter all values");
  } else {
    alert("REQUEST SUBMITTED");
    document.getElementById("requestForm").reset();
    var dateTime = getCurrentDateTime();
    var serialNumber = generateSerialNumber();
    var requestObject = {
      serialNumber: serialNumber,
      dateTime: dateTime,
      station: station,
      device: device,
      deviceNumber: deviceNumber,
      faultDescription: faultDescription,
      faultAckNumber: faultAckNumber,
    };

    // Store the request object in local storage
    var storedRequests = JSON.parse(localStorage.getItem("requests")) || [];
    storedRequests.push(requestObject);
    localStorage.setItem("requests", JSON.stringify(storedRequests));
    console.log(localStorage);
  }
}
