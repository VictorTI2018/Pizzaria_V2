
const addItemInLocalStorage = (key, value) => {
    localStorage.setItem(`${key}`, JSON.stringify(value))
}

const getItemInLocalStorage = (key) => {
    return localStorage.getItem(`${key}`)
}