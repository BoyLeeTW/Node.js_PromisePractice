let readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let askNamePromise = function() {
    return new Promise(function(resolve, reject){
        readline.question(`What's your name? `, (name) => {
            resolve(name)
        })
    })
}

let askIfHirePromise = function(name) {
    return new Promise(function(resolve, reject) {
        readline.question(`Hi ${name}, will you hire Brad? (y/n) `, (answer) => {
            if (answer != 'y' && answer != 'n') {
                reject('please enter "y" or "n"')
                return
            }
            resolve(answer);
            readline.close();
        })
    })
}

let respondIfHirePrmisie = function(answer) {
    return new Promise(function(resolve, reject) {
        if (answer =='y') {
            resolve('Hooray!!!!!')
        } else if (answer == 'n') {
            resolve('QQ......')
        } else {
            reject('Received unexpected value...')
        }
    })
};

function askIfHire() {
    askNamePromise()
        .then(askIfHirePromise)
        .then(respondIfHirePrmisie)
        .then(function(result) {
            console.log(result);
        })
        .catch(function(error) {
            console.log(error)
            askIfHire()
        })
}

askIfHire()