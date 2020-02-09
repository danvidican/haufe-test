
const config = {
    apiUrl: "http://localhost:4000"
}

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
        .then(user => {
            // localStorage.setItem('user', JSON.stringify(user));

            console.log("token =>> " + user);
            return user;
        });
}


export default {
    login
}