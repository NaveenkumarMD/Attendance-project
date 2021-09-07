const {GoogleSpreadsheet}=require('google-spreadsheet')

module.exports=async function initailizedoc(doc){
    await doc.useServiceAccountAuth({
        client_email:process.env.CLIENT_EMAIL,
        private_key:process.env.PRIVATE_KEY,
    })
    console.log("Initialized")
}