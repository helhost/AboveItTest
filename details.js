document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get("id");
    const personDetails = document.getElementById("person-details");

    // Fetch person details based on the 'personId'
    fetch("data.json")
        .then((response) => response.json())
        .then((data) => {
            const user = data.results[userId];

            const name = document.createElement('h2');
            personDetails.appendChild(name);
            name.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`;

            const userPicture = document.createElement('img');
            personDetails.appendChild(userPicture);
            userPicture.src = user.picture.large;

            const email = document.createElement('p');
            personDetails.appendChild(email);
            email.innerText = `email: ${user.email}`;

            const phoneNumber = document.createElement('p');
            personDetails.appendChild(phoneNumber);
            phoneNumber.innerText = `phone: ${user.phone}`;

            const age = document.createElement('p');
            personDetails.appendChild(age);
            age.innerText = `age: ${user.dob.age}`;

            const dob = document.createElement('p');
            personDetails.appendChild(dob);
            dob.innerText = `date of birth: ${user.dob.date.substring(0,10)}`;

            const gender = document.createElement('p');
            personDetails.appendChild(gender);
            gender.innerText = `gender: ${user.gender}`;

            const address = document.createElement('p');
            const location = user.location
            personDetails.appendChild(address);
            address.innerText = `address: ${location.street.name}, ${location.street.number} \n ${location.city}, ${location.state}, ${location.postcode} \n ${location.country}`;

        })
        .catch((error) => {
            console.error('Error:', error);
        });
});