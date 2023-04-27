const express = require("express");
const post = require("./postRoutes");
const app = express()
const port = 3000

// Post Routes middleware
app.use('/merge', post)
app.use('/public',express.static(__dirname+'/public'))
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/templates/index.html')
})



app.listen(port, () => {
    console.log("Server is running on http://localhost:" + port)
})
