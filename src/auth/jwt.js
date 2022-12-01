const jwt = require('jsonwebtoken');

function generateAccessToken(data) {
    return jwt.sign(data, process.env.JWT_SECRET_TOKEN, { expiresIn: '86400s' });
}

function authenticateUserToken(req, res, next) {
    const token = req.headers["authorization"]
  
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.JWT_SECRET_TOKEN, (err, data) => {
      console.log(err)
  
      if (err) return res.sendStatus(403)

      if (data.isAdmin == 1) return res.sendStatus(403)
  
      req.user_id = data.user_id
      req.name = data.name
      req.isAdmin = data.isAdmin
  
      next()
    })
}

function authenticateAdminToken(req, res, next) {
    const token = req.headers['authorization']
  
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.JWT_SECRET_TOKEN, (err, data) => {
      console.log(err)
  
      if (err) return res.sendStatus(403)

      if (data.isAdmin == 0) return res.sendStatus(403)
  
      req.user_id = data.user_id
      req.name = data.name
      req.isAdmin = data.isAdmin
  
      next()
    })
}

module.exports = {generateAccessToken, authenticateUserToken, authenticateAdminToken};