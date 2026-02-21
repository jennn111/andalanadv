// URL of the public API
const apiUrl = "https://jsonplaceholder.typicode.com/users";

// Select the container where user data will be displayed
const userContainer = document.getElementById("user-container");

// Async function to fetch and display users
async function fetchUsers() {
    try {
        // Fetch data from API
        const response = await fetch(apiUrl);

        // Check if response is successful
        if (!response.ok) {
            throw new Error("Network response was not OK");
        }

        // Convert response to JSON
        const users = await response.json();

        // Loop through users and display required details
        users.forEach(user => {
            const userDiv = document.createElement("div");

            userDiv.innerHTML = `
                <h3>${user.name}</h3>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>City:</strong> ${user.address.city}</p>
                <hr>
            `;

            userContainer.appendChild(userDiv);
        });

    } catch (error) {
        // Handle errors
        userContainer.innerHTML = `<p style="color:red;">Error fetching data: ${error.message}</p>`;
        console.error("Error:", error);
    }
}

// Call the function
fetchUsers();