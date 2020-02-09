// const db = require('utils/mongodb');
// const config = require('config.json');
// const User = db.User;


// const checkUserRole = async (req) => {
//     const userParam = req.body;
//     const user = await User.findOne({ username: userParam.username });
//     if (user) {
//         const token = req.header('x-auth-token');
//         const decoded = jwt.verify(token, config.secret);
//         const { role } = config
//         if (decoded.role !== role.internal) {
//             throw new PermissionError("You are not allowed!");
//         }
//     }
//     return next();
// }

// function internalUserVerification(req, res, next) {
//     return checkUserRole(req)
//         .then((u) =>  next())
//         .catch(err => next(err))
// }

// module.exports = internalUserVerification;