import Sendsay from 'sendsay-api'

const sendsay = new Sendsay()

class Api {
    async login(login, passwd, sublogin = null) {
        return await sendsay.request({
            action: 'login',
            login: login,
            sublogin: sublogin,
            passwd: passwd,
        })
    }

    async checkSession(session) {
        return await sendsay.request({
            action: 'pong',
            session,
        })
    }

    async logOut(session) {
        return await sendsay.request({
            action: 'logout',
            session,
        })
    }
}

export default new Api()
