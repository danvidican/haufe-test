module.exports = {
    success: payload => ({ payload }),
    validationError: (message, validation) => {
        console.error(`${new Date()}: ${message}`)

        return {
            status: 400,
            error: {
                message,
                validation
            }
        }
    },
    accessError: (message) => {
        console.error(`${new Date()}: ${message}`)

        return {
            status: 403,
            error: {
                message: message
            }
        }
    },
    notFoundError: (message) => {
        console.error(`${new Date()}: ${message}`)

        return {
            status: 404,
            error: {
                message: message
            }
        }
    },
    unknownError: (message, status = 500) => {
        console.error(`${new Date()}: ${message}`)

        return {
            status,
            error: {
                message: message
            }
        }
    }
}