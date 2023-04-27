const express = require('express')
const router = express.Router()
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const pdfMerger = require('./mergePdf')
const path = require('path')

router.post('/', upload.array('pdfs', 2), async (req, res, next) => {

    console.log(req.files)
    let d = await pdfMerger(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path))
    res.redirect(`/public/${d}.pdf`)

    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any
})
module.exports = router