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

    async makeRequest(stringRequest, sessionId) {
        const requestObj = JSON.parse(stringRequest)
        requestObj.session = sessionId
        const res = await sendsay.request(requestObj)

        return res
    }
}

export default new Api()
