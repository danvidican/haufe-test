

const config = {
    apiUrl: "http://localhost:8080/api/v1"
}

function login(username, password) {
    const email = username;
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({ email, password })
    };

    return fetch(`${config.apiUrl}/login`, requestOptions)
        .then(response => {
            if (response.status !== 200) {
                throw Error('Request was rejected with status' + response.status);
            }
            return response.json()
        })
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        })
}

function registerRestaurant(email, password, name, description, location, openHour, closeHour) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ email, password, name, description, location, openHour, closeHour })
    };

    return fetch(`${config.apiUrl}/restaurants/registerRestaurant`, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw Error('Request was rejected with status' + response.status);
            }
        })
}

function registerCustomer(email, password, name, phone_number, address) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ email, password, name, phone_number, address })
    };

    return fetch(`${config.apiUrl}/customers/registerCustomer`, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw Error('Request was rejected with status' + response.status);
            }
        })
}

function deleteUser(userId) {
    const token = JSON.parse(localStorage.getItem('user')).token;
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authentication': token
        }   
    };

    return fetch(`${config.apiUrl}/users/delete/` + userId, requestOptions)
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
    registerRestaurant,
    registerCustomer,
    logout,
    getAll,
    deleteUser
}