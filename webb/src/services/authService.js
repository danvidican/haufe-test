

const config = {
    apiUrl: "http://localhost:4000"
}

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ username, password })
    };

    return fetch(`${config.apiUrl}/users/login`, requestOptions)
        .then(response => {
            if (response.status === 401) {
                throw Error('Request was rejected with status' + 401);
            }
            return response.json()
        })
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        })
}

function register(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ username, password })
    };

    return fetch(`${config.apiUrl}/users/register`, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw Error('Request was rejected with status' + response.status);
            }
        })
}

function logout() {
    localStorage.removeItem('user');
}

function getAll() {
    const token = JSON.parse(localStorage.getItem('user')).token;

    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'x-auth-token': token
        }
    };

    return fetch(`${config.apiUrl}/users/`, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw Error('Request was rejected with status' + response.status);
            }
            return response.json();
        })
}


export default {
    login,
    register,
    logout,
    getAll
}