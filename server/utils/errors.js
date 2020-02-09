class ConflictError extends Error {
    constructor(message) {
        super(message)
        this.name = 'ConflictError'
        this.message = message
    }
}
class PermissionError extends Error {
    constructor(message) {
        super(message)
        this.name = 'PermissionError'
        this.message = message
    }
}
class DatabaseError extends Error {
    constructor(message) {
        super(message)
        this.name = 'DatabaseError'
        this.message = message
    }
}

class UnauthorizedError extends Error {
    constructor(message) {
        super(message)
        this.name = 'UnauthorizedError'
        this.message = message
    }
}


module.exports = {
    ConflictError,
    PermissionError,
    DatabaseError,
    UnauthorizedError
  }