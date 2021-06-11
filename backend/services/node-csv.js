const fs = require('fs')
const rl = require('readline')

exports.readCSV = (fp, cb) => {
    const readInterface = rl.createInterface({
        input: fs.createReadStream(fp),
        console: false
    })

    let table = []
    let first = true
    let keys = []

    readInterface.on('line', function (line) {
        if (first) {
            first = false
            keys = line.split(',')
        } else {
            let data = line.split(',')
            let newLine = {}
            data.forEach((item, i) => {
                newLine[keys[i]] = item
            })
            table.push(newLine)
            // console.log(table)
        }
    })
    readInterface.on('close', function () {
        cb(table)
    })
}

exports.writeCSV = (fp, table) => {
    let keys = Object.keys(table[0])
    let output = keys.join(',') + '\n'
    table.forEach(item => {
        let newLine = Object.values(item).join(',') + '\n'
        output += newLine
    })
    fs.writeFile(fp, output, function (err) {
        if (err) {
            console.log(err)
        }
    })
}
