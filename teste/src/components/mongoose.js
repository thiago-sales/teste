const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://thiagobrotther:<piano2023>@documento.grgrx3t.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("MongoDB conectado...")
}).catch((err)=> {
    console.log|("Houve um erro ao se conectar ao mongoDB: " +err)
})