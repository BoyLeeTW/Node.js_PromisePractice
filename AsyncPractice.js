function logAfter(value, second) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                console.log(value)
                resolve()
            }
            , second)
    })
}

async function startAsyncTask() {
    await logAfter('2000', 2000)
    await logAfter('1000', 1000)
    await logAfter('500', 500)
    await logAfter('3000', 3000)
}

function startPromiseTask() {
    logAfter('2000', 2000)
        .then(logAfter.bind(null, '1000', 1000))
        .then(() => logAfter('500',500))
        .then(logAfter.bind(null, '3000',3000))
}

async function startTask() {
    console.log('start async task')
    await startAsyncTask()
    console.log('start promise task')
    startPromiseTask()
}

startTask()