const submitData = function(name,email) {
    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            name:name,
            email:email,
        }),
    })
    .then(resp => resp.json())
    .then(data => {
        console.log(data); // Log the response data to understand its structure
        const bodyElement = document.querySelector("body");
        // Assuming data.id is a string or number, set it as innerHTML
        bodyElement.innerHTML = data.id;
    })
    .catch(error => {
        alert("'Unauthorized Access");
        console.log(error.message);
    });
    return fetch;
};
submitData("natalie","natalie@gmail.com.com");