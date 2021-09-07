const router=require('express').Router()
const { GoogleSpreadsheet } = require('google-spreadsheet')
const Docinitialization = require('../Controllers/Docinitialization')

router.get('/', (req,res)=>{
    res.send("hello world")
})
router.get('/getsheetsinfo', async (req,res)=>{
    let doc=new GoogleSpreadsheet(process.env.SHEETS_ID)
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
    res.json({sheets})
})
module.exports = router