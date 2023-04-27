const fs = require('fs')
const replaceThis = "js"
const replaceWith = 'ts'
try {
    const data = fs.readdirSync(`${__dirname}/jms`)
    console.log(data)
    let data2 = data.map((item) => {

        const regexOfReplaceWith = new RegExp(replaceThis, 'gi')

        const newName = item.replace(replaceThis, regexOfReplaceWith)

        fs.renameSync("data/" + item, "data/" + newName)
    })
    console.log(data2)
} catch (error) {
    console.log(error)
}