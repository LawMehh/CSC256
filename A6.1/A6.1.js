// Function to handle form submission
function submitForm() {
    // Get the values from the form fields
    const username = document.getElementById('username').value;
    const weapons = document.getElementById('weapons').value;
    const health = document.getElementById('health').value;
    const points = document.getElementById('points').value;

    // Output the values to the designated areas on the page
    document.getElementById('outputUsername').textContent = username;
    document.getElementById('outputWeapons').textContent = weapons;
    document.getElementById('outputHealth').textContent = health;
    document.getElementById('outputPoints').textContent = points;
}
