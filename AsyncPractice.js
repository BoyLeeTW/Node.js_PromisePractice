function logAfter(value, second) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(value)
            resolve()
            }
            , second)
    })
}

async function startTask() {
    await logAfter('2000', 2000)
    await logAfter('1000', 1000)
    await logAfter('500', 500)
    await logAfter('3000', 3000)
}

startTask()