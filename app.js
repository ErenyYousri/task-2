const yargs = require('yargs')
const fs = require('fs')

readFileData = function(){
    try{
        data = fs.readFileSync('customeres.json')
        if(data.toString().length==0) throw new Error('errrr')
        data = JSON.parse(data.toString())
        if(!Array.isArray(data)) throw new Error('')
    }
    catch(e){
        data = []
        fs.writeFileSync('customeres.json', "[]")
    }
    return data    
}
showAllData = function(){
    data = readFileData()
    if(data.length>0) console.table(data);
    else console.log("nothing here")
}

addNewData = function(customer) {
    data = readFileData() 
    data.push(customer)
    fs.writeFileSync('customeres.json', JSON.stringify(data))
}
showSingleCustomer = function(single){
    data = readFileData()
    result = data.find(element=>{
        return element.single == single
    })
    if(!result) console.log("not found")
    else {console.log(result)}
}


yargs.command({
command:"addCustomer",
describe:"add new customer to our file",
builder:{
name:{
    demandOption:true,
    describe:"ereny",
    type:"string"
},
balance:{

    demandOption:true,
    describe:"balance",
    type:"number"
},
accNum:{
    demandOption:true,
    describe:"account",
    type:"number"

},
},
handler:function(argv){
    console.log(` ${argv.name} - ${argv.accNum} - ${argv.balance}`);
}
})
yargs.argv
   









