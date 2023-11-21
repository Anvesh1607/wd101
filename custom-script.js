function validateDOB() {
    var dobInput = document.getElementById("dob");
    var dobValue = new Date(dobInput.value);
    var currentDate = new Date();
    var minDate = new Date(currentDate.getFullYear() - 55, currentDate.getMonth(), currentDate.getDate());
    var maxDate = new Date(currentDate.getFullYear() - 18, currentDate.getMonth(), currentDate.getDate());

    if (dobValue < minDate || dobValue > maxDate) {
        alert("Date of birth must be between 18 and 55 years.");
        dobInput.value = "";
    } else {
        alert("Thank you for providing a valid date of birth.");
    }
}

function loadData() {
    var savedData = JSON.parse(localStorage.getItem("registrationData")) || [];
    var tableBody = document.getElementById("tableBody");

    tableBody.innerHTML = "";
    savedData.forEach(function (data) {
        var row = tableBody.insertRow();
        for (var key in data) {
            var cell = row.insertCell();
            cell.textContent = data[key];
        }
    });
}

function handleSubmission(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var dob = document.getElementById("dob").value;
    var acceptTerms = document.getElementById("acceptTerms").checked;

    var formData = { name, email, password, dob, acceptTerms };
    var savedData = JSON.parse(localStorage.getItem("registrationData")) || [];
    savedData.push(formData);
    localStorage.setItem("registrationData", JSON.stringify(savedData));

    loadData();
    validateDOB();
}

document.getElementById("registrationForm").addEventListener("submit", handleSubmission);

window.onload = function () {
    loadData();
    validateDOB();
};
