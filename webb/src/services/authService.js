
const config = {
    apiUrl: "http://localhost:4000"
}

function login(username, password) {
    console.log("login service =>> " + username + " " + password);
    const requestOptions = {
        method: 'POST',
        headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`${config.apiUrl}/users/login`, requestOptions)
        .then(resp => { return resp.json(); }).then((user) => {
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        });
}

function logout(){
    localStorage.removeItem('user');
}


export default {
    login,
    logout
}