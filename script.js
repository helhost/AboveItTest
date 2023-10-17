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

    