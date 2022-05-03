const { Router } = require('express');
const router = Router();

router.get('/', (req, res)=>{
    const max = 1001
    const min = 1
    let number = Math.floor(Math.random() * (max - min) + min);

    if(number === 1 && number <= 100){
        //Legendary
        return res.status(200).json(number) 
    }else if(number >= 101 && number <= 250){
        //Epic
        return res.status(200).json(number) 
    }else if(number >= 251 && number <= 500){
        //Rare
        return res.status(200).json(number) 
    }else if(number >= 501 && number <= 1000){
        //Common
        return res.status(200).json(number)  
    }
})

module.exports = router;