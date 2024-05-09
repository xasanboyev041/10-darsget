document.addEventListener("DOMContentLoaded", function () {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      const userData = document.getElementById("userData");
      users.forEach((user) => {
        userData.innerHTML += `
                        <tr>
                            <td>${user.id}</td>
                            <td>${user.name}</td>
                            <td>${user.email}</td>
                            <td>${user.phone}</td>
                        </tr>
                    `;
      });
    })
    .catch((error) => console.error("Error fetching users:", error));
});
