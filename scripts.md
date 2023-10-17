script.js
```js
let userList = document.createElement('ul')
document.body.appendChild(userList);

let newUserButton = document.createElement('button');
document.body.appendChild(newUserButton);
newUserButton.innerText = 'add a new user';
newUserButton.onclick = () => {
    window.location.href = 'newUser.html'
}



fetch('./data.json')
    .then(response => response.json())
    
    .then((data) => {
        console.log(data.results[0])

        data.results.forEach((user, idx) => {

            const userName = document.createElement('ul');
            userList.appendChild(userName);
            userLink = document.createElement('a')
            userName.appendChild(userLink)

            userLink.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`;
            userLink.href = `details.html?id=${idx}`
        });
    })
    
```


details.js
```js
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
```

newUser.js
```js
// const fs = require('fs');

let input = document.createElement('input');
document.body.appendChild(input);
input.type='text'

function getInput(message) {
    input.placeholder = message;
  
    return new Promise((resolve, reject) => {
      const handleKeyPress = (event) => {
        if (event.key === "Enter" || event.keyCode === 13) {
          document.removeEventListener("keydown", handleKeyPress);
          resolve(input.value);
        }
      };
  
      document.addEventListener("keydown", handleKeyPress);
    });
}


document.addEventListener("DOMContentLoaded", () => {
    fetch("data.json")
        .then((response) => response.json())
        .then((data) => {

            const newUser = {
                "gender": getInput('gender'),
                "name": {
                    "title": getInput('title'),
                    "first": getInput('firstNmae'),
                    "last": getInput('lastName')
                }, // didn't have time to finish all, and not quite sure it the code is running as intendet yet. 
                "location": {
                    "street": {
                        "number": 4023,
                        "name": "Calle de Tetuán"
                    },
                    "city": "Mérida",
                    "state": "Ceuta",
                    "country": "Spain",
                    "postcode": 26662,
                    "coordinates": {
                        "latitude": "-32.4051",
                        "longitude": "-49.5829"
                    },
                    "timezone": {
                        "offset": "-2:00",
                        "description": "Mid-Atlantic"
                    }
                },
                "email": "gerardo.pascual@example.com",
                "dob": {
                    "date": "2000-05-25T17:21:00.122Z",
                    "age": 23
                },
                "registered": {
                    "date": "2008-04-16T07:12:41.096Z",
                    "age": 15
                },
                "phone": "982-552-665",
                "cell": "648-177-771",
                "id": {
                    "name": "DNI",
                    "value": "86641287-R"
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/15.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/15.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/15.jpg"
                },
                "nat": "ES"
            }

            

            // data.users.push(newUser);

            // const updatedDataJSON = JSON.stringify(data);

            // fs.writeFile('newData.json', updatedDataJSON, (error) => {
            //     if (error) {
            //         console.error('Error writing the file:', error);
            //     } else {
            //         console.log('Data has been written to newData.json');
            //     }
            // });

            

        })
        .catch((error) => {
            console.error('Error:', error);
        });


});

```