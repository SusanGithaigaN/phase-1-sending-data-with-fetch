// Load the DOM content.
document.addEventListener("DOMContentLoaded", () => {
  submitData();
});
function submitData(name, email) {
  // Fetch a request and tell fetch() that this is a POST request.
  return (
    fetch("http://localhost:3000/users", {
      method: "POST",
      // Make sure that the destination of our POST request knows what format the data being sent is in.
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      // Convert the objects into a  string.
      body: JSON.stringify({ name, email }),
    })
      // Handle the POST request response.
      .then(function (response) {
        return response.json();
      })
      // Retrieve the new id value and append it to the DOM
      .then(function (object) {
        document.body.textContent = object["id"];
      })
      // Handle the failed POST request using catch and append the error message to the DOM.
      .catch(function (error) {
        document.body.textContent = error.message;
      })
  );
}
