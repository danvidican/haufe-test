

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

function logout() {
    localStorage.removeItem('user');
}


export default {
    login,
    logout
}