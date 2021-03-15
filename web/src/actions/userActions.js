import { userConstants } from '../constants';
import userService from '../services/authService';

const userActions = {
    login,
    logout,
    getAll,
    registerRestaurant,
    registerCustomer,
    deleteUser
};

export default userActions;

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(resp => {
                    dispatch(success(resp));
            })
            .catch(error => {
                console.log("err login actions");
                dispatch(failure(error));
            });
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function registerRestaurant(email, password, name, description, location, openHour, closeHour) {
    return dispatch => {
        userService.registerRestaurant(email, password, name, description, location, openHour, closeHour)
            .then(resp => {
            })
            .catch(error => {
                console.log("error at register action"+ error);
            });
    };
}

function registerCustomer(email, password, name, phone_number, address) {
    return dispatch => {
        userService.registerCustomer(email, password, name, phone_number, address)
            .then(resp => {
            })
            .catch(error => {
                console.log("error at register action"+ error);
            });
    };
}

function deleteUser(userId) {
    return dispatch => {
        userService.deleteUser(userId)
            .then(resp => {
            })
            .catch(error => {
                console.log("error at delete user action" + error);
            });
    };
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}