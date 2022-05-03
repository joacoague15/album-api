const { Router } = require('express');
const router = Router();

router.get('/', (req, res)=>{
    const max = 1001
    const min = 1
    const number = Math.floor(Math.random() * (max - min) + min);
    if(number === 1 && number <= 100){
        console.log(number)
        return res.status (204), console.log("Legendary")
    }else if(number >= 101 && number <= 250){
        console.log(number)
        return res.status (204), console.log("Epic") 
    }else if(number >= 251 && number <= 500){
        console.log(number)
        return res.status (204), console.log("Rare") 
    }else if(number >= 501 && number <= 1000){
        console.log(number)
        return res.status (204), console.log("Common") 
    }
})

module.exports = router