const fs = require('fs')


fs.readFile('archivo.json', 'utf8', (err, data)=>{
    if(err){
        console.log("Error al leer el archivo")
        return
    }
    console.log(data)
})