import fs from "fs"

export async function readProblemInput(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    }).then(contents => {
        return contents.split("\r\n")
    })
}