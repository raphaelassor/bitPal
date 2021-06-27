const authService = require('./auth.service')
const userService = require('../user/user.service')
const logger = require('../../services/logger.service')
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client('882164866738-fe8q1uh6fprm8fgtqq6bffcti6put4o1.apps.googleusercontent.com')

async function login(req, res) {
    const { username, password } = req.body
    try {
        const user = await authService.login(username, password)
        req.session.user = user
        res.json(user)
    } catch (err) {
        logger.error('Failed to Login ' + err)
        res.status(401).send({ err: 'Failed to Login' })
    }
}

async function signup(req, res) {
    try {
        const { username, password, fullname } = req.body
        // Never log passwords
        // logger.debug(fullname + ', ' + username + ', ' + password)
        const account = await authService.signup(username, password, fullname)
        logger.debug(`auth.route - new account created: ` + JSON.stringify(account))
        const user = await authService.login(username, password)
        req.session.user = user
        res.json(user)
    } catch (err) {
        logger.error('Failed to signup ' + err)
        res.status(500).send({ err: 'Failed to signup' })
    }
}

async function logout(req, res) {
    try {
        const user = req.body
        await authService.logout(user)
        if (req.session) req.session.destroy()
        res.send({ msg: 'Logged out successfully' })
    } catch (err) {
        res.status(500).send({ err: 'Failed to logout' })
    }
}

async function googleLogin(req, res) {
    try {
        const { tokenId } = req.body
        const googleRes = await client.verifyIdToken({ idToken: tokenId, audience: '882164866738-fe8q1uh6fprm8fgtqq6bffcti6put4o1.apps.googleusercontent.com' })
        const { email, name } = googleRes.payload
        console.log(googleRes.payload)
        const user = await userService.getByUsername(email)
        if (!user) {
            const account = await authService.signup(email, tokenId, name)
            logger.debug(`auth.route - new account created: ` + JSON.stringify(account))
        }
        const googleUser = await authService.login(email, tokenId)
        console.log('Google user',googleUser)
        req.session.user = googleUser
        res.json(googleUser)

    } catch (err) {
        res.status(500).send({ err: 'Failed to login with google' })
    }
}

module.exports = {
    login,
    signup,
    logout,
    googleLogin
}