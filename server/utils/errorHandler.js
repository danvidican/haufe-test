module.exports = errorHandler;

function errorHandler(err, req, res, next) {
    if (typeof (err) === 'string') {
        return res.status(400).json({ message: err });
    }

    if (err.name === 'ValidationError') {
        return res.status(400).json({ message: err.message });
    }

    if (err.name === 'UnauthorizedError') {
        const message = err.message ? err.message : 'Invalid Token';
        return res.status(401).json({ message: message });
    }

    if(err.name === 'PermissionError') {
        return res.status(403).json({ message: err.message });
    }


    return res.status(500).json({ message: err.message });
}