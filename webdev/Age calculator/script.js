function calculateAge() {
    // Get user input
    var day = document.getElementById('dob').value;
    var month = document.getElementById('mob').value;
    var year = document.getElementById('yob').value;

    // Create a Date object with the user's input
    var dob = new Date(year, month - 1, day);

    // Get the current date
    var today = new Date();

    // Calculate the age
    var age = today.getFullYear() - dob.getFullYear();

    // Check if the birthday has occurred this year
    if (today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
        age--;
    }

    // Display the result
    document.getElementById('result').innerHTML = "Your age is: " + age;
}
