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
