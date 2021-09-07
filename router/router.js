const router=require('express').Router()
const { GoogleSpreadsheet } = require('google-spreadsheet')
const Docinitialization = require('../Controllers/Docinitialization')

router.get('/', (req,res)=>{
    res.send("hello world")
})
router.get('/getsheetsinfo', async (req,res)=>{
    let doc=new GoogleSpreadsheet("1NOXSJxDxN5gv4-OFuFNMFKBTzTRPy2prWKijcbIX3gY")
    await Docinitialization(doc)
    await doc.loadInfo()
    console.log(doc.title)
    console.log(doc.sheetCount)
    i=0
    sheets=[]
    for (let i = 0; i < doc.sheetCount; i++) {
        console.log(doc.sheetsById[i].a1SheetName)   
        sheets.push(doc.sheetsById[i].a1SheetName)     
    }
    sheets.json({arr})
})
module.exports = router