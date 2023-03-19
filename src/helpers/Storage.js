class Storage {
    setProps(key, value) {
        localStorage.setItem(key, JSON.stringify(value))
    }

    getProps(key) {
        return JSON.parse(localStorage.getItem(key))
    }

    removeProps(key) {
        localStorage.removeItem(key)
    }
}

export default new Storage()
