const alertCustom = (messageOptions,) => {
    return `<div class="alert alert-${messageOptions.tipo}" role="alert">
                ${messageOptions.message}
            </div>`
}

const clearAlertCustom = (messageOptions) => {
    setTimeout(() => {
        messageOptions.el.innerHTML = `${messageOptions.message || ''}`
    }, messageOptions.time)
}